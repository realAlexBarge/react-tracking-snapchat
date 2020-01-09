# React Tracking Snapchat

[![Build Status](https://travis-ci.org/realalexbarge/react-tracking-snapchat.svg?branch=master)](https://travis-ci.org/realalexbarge/react-tracking-snapchat) [![dependencies Status](https://david-dm.org/realalexbarge/react-tracking-snapchat/status.svg)](https://david-dm.org/realalexbarge/react-tracking-snapchat) [![devDependencies Status](https://david-dm.org/realalexbarge/react-tracking-snapchat/dev-status.svg)](https://david-dm.org/realalexbarge/react-tracking-snapchat?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Un-official module to easily add Snapchat pageview tracking to react apps. It functions as a tiny wrapper for the native script tag and window api. After initialization the Snapchat script is injected into the document.

# Installation

With [npm](https://www.npmjs.com/):

```bash
npm install react-tracking-snapchat --save
```

# Usage

Before tracking any page views or events the tracker needs to be imported and initialized with the custom tracking id:

```js
import SnapchatTracking from 'react-tracking-snapchat';
SnapchatTracking.initialize('TRACKING_ID');
```

After initializing page views can be tracked like this:

```js
SnapchatTracking.trackPageview();
```

There is also the option to track custom events with event action:

```js
SnapchatTracking.trackEvent(eventAction);
```

# How this works

This modules takes care of injecting the provider specific tracking script into the document and provides a tiny wrapper for the tracking api. It also exposes the tracker object api for direct access.

Documentation for the raw tracker api can be found [here](https://help.snapchat.com/hc/en-us/articles/360003469854-Snapchat-Pixel-Overview) and [here](https://help.snapchat.com/hc/en-us/articles/360007856794-Developer-Notes).
