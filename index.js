const Vision = require('@google-cloud/vision')
const Storage = require('@google-cloud/storage')

let storage = Storage()
let vision = Vision()

const VALID_PHOTOS_BUCKET = storage.bucket('valid-photos')

exports.personMuffin = function (event, callback) {
  const data = event.data

  if (data.resourceState === 'not_exists') {
    console.log(`File ${data.name} deleted.`)
    callback()
  } else {
    const file = storage
                  .bucket(data.bucket)
                  .file(data.name)
    processFile(file, callback)
  }
}

function processFile (file, callback) {
  vision.detectFaces(file, (err, faces) => {
    if (err) {
      console.log(err)
      return callback(err)
    }
    console.log(`Number of faces: ${faces.length}`)
    console.log(faces)

    if (faces.length === 1) {
      moveToValid(file, faces, callback)
    } else {
      console.log('Skipping')
      return callback()
    }
  })
}

function moveToValid (file, faces, callback) {
  file.move(VALID_PHOTOS_BUCKET, callback)
}
