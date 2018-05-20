# My Youtube Player

This a simple video player app created using React and Youtube API Search in order to get familiarized with this js framework.

### Getting Started

In order to run this project you need to have a YouTube API Key. This key will be used by the App component and it's imported from a Constants file with the name of `YT_API_KEY`.

>If you don't have an API key you can generete one here: [Google developers console](https://console.developers.google.com). Sign in, create a new project and then look for the "YouTube Data API v3", enable it and on the left hand side in the "Credentials" option create a new API Key, give it a name and when created just copy that key into your Constants file.

Your constants.js file must be like this:

```
const Constants = {
  YT_API_KEY: "<Your API key>"
}

export default Constants;
```

Checkout this repo, install dependencies, then start the app with the following:

```
> git clone repoUrl
> cd projectFolder
> npm install
> npm start
```
