const util = require('util')

const {Storage} = require('@google-cloud/storage');

const vision = require('@google-cloud/vision');

const storage = new Storage()

const VALID_PHOTOS_BUCKET = storage.bucket('valid-photos')

exports.personMuffin = function (event, callback) {
    const data = event.data
    processFile(data.bucket, data.name, callback)
}

function processFile (bucket, file, callback) {
  const client = new vision.ImageAnnotatorClient()
  client.faceDetection(`gs://${bucket}/${file}`)
    .then((result) => {
      faces = result[0].faceAnnotations
      console.log('number of faces', faces.length)
      if (faces.length === 1) {
        console.log('moving to valid')
        moveToValid(bucket, file, faces, callback)
      } else {
        console.log('Skipping')
        return callback()
      }
    })
    .catch((error) => {
      console.log('Error!!!', error)
      callback(error)
    })
}

function moveToValid (bucket, file, callback) {
  storage.bucket(bucket).file(file).move(VALID_PHOTOS_BUCKET, callback)
}
