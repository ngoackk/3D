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

cordova run ios --buildFlag='-UseModernBuildSystem=0'
cordova build ios --buildFlag='-UseModernBuildSystem=0'


