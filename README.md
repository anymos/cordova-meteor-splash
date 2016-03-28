# cordova-meteor-splash

Clone the repo.

## cordova test

given cordova 6.1.0 (cordova-lib@undefined) already installed

cd hello
cordova run ios

The app is started in ios simulator. Open safari , you can see the counter decreasing to 0 and then display the cordova icon


## meteor test

given meteor 1.3.x installed

cd src.meteor
meteor run ios

The app is started in ios simulator. Open safari , you can see the counter decreasing to 0 and then display the cordova icon

The actual trick is to to avoid using launch-screen and take control over the splashscreen yourself,
you could remove mobile-experience (which implies launch-screen). That will also remove fastclick and mobile-status-bar however, so you may want to add those back.

For a meteor full solution kindly have a look to https://forums.meteor.com/t/meteor-1-3-rc-12-splash-screen-do-not-follow-autohidesplashscreen-false/20105 that was the original point of this repo

And a big Thanks to @martijnwalraven from meteor
