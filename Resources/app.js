/**
 * This is a really simple social app that demonstrates how to post to Twitter using Appcelerator Titanium.
 * REQUIRED: DOWNLOAD the "social.js" file from http://appc.me/social.js
 *           and SAVE IT in your app's Resources directory.
 *
 * Get API access to Twitter here: https://dev.twitter.com/apps
 * The consumer key and secret will be used later in this app. Make sure you check "Read & Write"!
 *
 * The latest version of this file can always be found at http://appc.me/social.sample.js
 *
 * Tweet me @dawsontoth with questions, or on the Help Desk if you're an Appcelerator customer!
 */

/**
 * We'll start by making a window with a button...
 */
var win = Ti.UI.createWindow({
	backgroundColor : '#fff'
});
var shareButton = Ti.UI.createButton({
	width : '200dp',
	bottom : '10dp',
	height : '43dp',
	title : 'Tweet "Hello, World!"'
});
win.add(shareButton);
win.open();

var social = require('social_plus');

//Create a Twitter client for this module
var twitter = social.create({
	consumerSecret : Ti.App.Properties.getString('twitter.consumerSecret'),
	consumerKey : Ti.App.Properties.getString('twitter.consumerKey')
});
/**
 * And when the user clicks on the button, share a message with the world!
 * Note that this will show the authorization UI, if necessary.
 */
shareButton.addEventListener('click', function() {
	twitter.shareImage({
		message : "Test image upload with appcelerator & social.js on android",
		image : (Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "KS_nav_ui.png")).read(),
		success : function() {
			alert('Tweeted!');
		},
		error : function() {
			alert('ERROR Tweeted!');
		}
	});
});

/**
 * Finally, here are some other methods you might want to use:
 */
/*
 twitter.isAuthorized();
 twitter.authorize(function() {
 alert('Authorized!');
 });
 twitter.deauthorize();
 */