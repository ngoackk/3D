# hybrid_cordova
## Cordova app with vue and bootstraps.
npm install.
cordova platform add browser.
cordova run browser.

## To develop with android or ios 
cordova platform add android.
cordova run android.
cordova run ios.

## Redeploy when code changed
npm run dev.
cordova run browser.

## Deploy app production mode
npm run prod.
cordova run browser.

# Cordova CLI

cordova run ios --buildFlag='-UseModernBuildSystem=0'.
cordova build ios --buildFlag='-UseModernBuildSystem=0'.

# Dev mode
npm run dev.
node web.js.

# keytool -genkey -v -keystore hau-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias hau.android.key

# jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore hau-release-key.jks app-release-unsigned.apk hau.android.key

# zipalign -v 4 app-release-unsigned.apk hau-release.apk