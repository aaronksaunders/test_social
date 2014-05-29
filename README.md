Twitter Image Upload Integrated into Alloy social.js library
====
The out of the box social.js library from Appcelerator does not support image uploads for twitter and it only works on Alloy projects. This old sample has been updated to address both of those issues.

Also ran into an issue where social.js was crashing on Androids when animating the screens; so I removed the animation in android.

Using Sample
======
This is NOT an alloy project but the code can be easily integrated into a alloy project.

Be sure to set the proper information in you tiapp.xml

```
    <property name="twitter.consumerKey">ADD-VALUE-HERE</property>
    <property name="twitter.consumerSecret">ADD-VALUE-HERE</property>
```

I needed to also add the animatio.js library from the Alloy project to get this library to work
