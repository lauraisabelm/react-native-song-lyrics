# Song Lyrics Mobile App

This is a Sample React Native App with RN63 developed with Hooks, Typescript and Redux. Lyrics are retrieved from the ​https://lyricsovh.docs.apiary.io/​ Rest API.

![App](https://drive.google.com/uc?export=view&id=1lNvfVbV69GXkKGuN3kWhZHZdx1QNy3G7)


Song Lyrics App lets you:

- Search song lyrics by typing the name of the artist and of the song. You must write the complete names, otherwise you'll get an error message, that will also appear if unexpected things occured and the search is not successfull. It's important to mention that this search functionality is not available if you don't have internet connection.
- See the complete lyrics and the corresponding artist and song names in a new screen.
- Have access to the last lyrics successfully retrieved after a search (only if there was a previous successful search). This functionality is available even if you don't have internet connection.
- Have access to a history section where you can find a list of all successful song lyrics searches. If you tap on any item of the list, you'll redirected to a new screen with the lyrics of the selected song item. This section is available with no internet access.
- Be able to clean the history data.

## iOS Video
https://drive.google.com/file/d/1dvYYfFqZifhGR6YX1NV23YSLmaxwAzs-/view?usp=sharing

## Android Video

https://drive.google.com/file/d/18TfSup1gXU7ToBDPiNKPKl2dlV6U2evD/view?usp=sharing

## Getting started

Before cloning this reposity you must check that you have `node`, `yarn`, `react-native-cli` and Android Studio installed. If you want to run the iOS app you will also need `cocoapods` and Xcode installed.

After cloning the repo follow this steps:

```
$ yarn install
```

And in order to run the iOS app:

```
$ cd ios && pod install
```

## Create the .env file

Create a `.env` file in the project's root and add this line:

```
API_URL=https://api.lyrics.ovh/v1/
```

## Launch iOS

`$ react-native run-ios` or from XCode opening the workspace file

## Launch Android

`$ react-native run-android` or from Android Studio

## Libraries used

- React Native version: 0.63.2
- TypeScript v3.8.3
- React Navigation v5
- `react-native-config` This library allows access to the project config variables through the `.env` file. Ideally, the `.env` file should not be in the repo because it stores variables that must be kept safe, such as API's URLs, services Keys such as Sentry, Google, among others.
- `redux`, `react-redux` and `redux-thunk` It allows to manage a global state in the app and its DevTools tool facilitates to trace any change of the state, which is awesome.
- `eslint` and `prettier` Used to efficiently identify errors in the code and fix them.
- `husky` It allows to run eslint and prettier scripts before making a commit.
- `styled-components` It's an organized way to add styles to components, makes them more readable.
- `react-native-vector-icons` Used to add customizable icons from different available bundles.
- `@react-native-community/netinfo` It is used to identify when the user has internet connection and when not.
