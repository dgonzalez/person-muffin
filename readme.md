# Human or Muffin
Welcome to the workshop! If you have any query please do not hesitate to ask us. We might be busy but... we are here for that.
Try to complete it without looking into the code but... if you get stuck or you cannot attend to the full workshop, feel free to poke the code and experiment things.

## Our objectives
- Create a cloud function (or several) in order to filter all the images from a Google Cloud Storage bucket so that we move them to another bucket only if there is **only one face** in the picture.

- **Bonus**: Move to a different bucket called angry_customers where we will move the pictures with people that are angry.

## Tools

We are going to use the following tools:
- Google Cloud SDK ([information](https://cloud.google.com/sdk/) and [installation](https://cloud.google.com/sdk/downloads#interactive))
- Google Vision API ([SDK](https://github.com/googlecloudplatform/google-cloud-node#cloud-vision-beta))
- Google Storage API ([SDK](https://github.com/googlecloudplatform/google-cloud-node#cloud-storage-ga))


## Resources
- [Tutorial for Google Cloud functions](https://cloud.google.com/functions/docs/tutorials/http)
- [Tutorial for the Vision API](https://cloud.google.com/vision/docs/face-tutorial)
- [Tutorial for Google Cloud Storage](https://cloud.google.com/nodejs/getting-started/using-cloud-storage)
- [Similar examples](https://github.com/GoogleCloudPlatform/nodejs-docs-samples)

