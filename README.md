# Nosedive-App

This is a mock up of the 'rating' app as seen on the NetFlix "Black Mirror" episode called "Nosedive".

It was just built as a play tool so that the family could annoy each other during the day by 'rating' each other (e.g. for doing homework, chores etc.).  A brief explanation of my thought process and development ideas is [on my blog](http://devan.blaze.com.au/blog/2016/11/30/building-a-nosedive-rating-app-in-a-couple-of-hours).

A short Youtube demo of what the app does is [here](https://youtu.be/VvpPVAScOmM).

The base code is released here so that people CAN indeed take it further by adding social links, facial recognition etc.  In its current form, the app simply allow the user to swpie left/right to set the stars, then swipe up to play the rating sounds.

## Framework

You will need to install the [Ionic Framework](https://ionicframework.com/) on your system to be able to work on this code.  This will enable you to build the app for iOS or Android devices.

Full instructions are [here](https://ionicframework.com/getting-started/), but the basic way to install Ionic is:

    npm install -g cordova ionic

Then check out this code into a folder of your choice, and change directories so you are within that folder.  Then run:

    ionic add platform ios

or, of you are developing for Android instead of Apple devices:

    ionic add platform android

(you can, of course, add both platforms for dual platform development)

Next, you will need to add the Cordova Native Audio plugin.  To do this, type:

    cordova plugin add cordova-plugin-nativeaudio

You may also need to add ngCordova to your Ionic setup:

    bower install ngCordova --save

That should be it.  You can now start developing the app.

## Running The App

You should be able to build and test the app as so (assuming iOS here, for Android, replace all occurences of `ios` with `android`):

    ionic build ios

Run it in the emulator:

    ionic emulate ios

## Conclusion

Have fun with this.  I use it all the time now to annoy my wife and kids by rating everything they do around the house.  Some clever developers may be able to implement facial recognition etc.

