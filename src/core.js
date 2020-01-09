/* eslint-disable no-undef */
/**
 * React Snapchat Tracking Module
 *
 * @package react-tracking-snapchat
 * @author Alexander Barge <alexander.barge@gmail.com>
 */

export function trackPageview() {
  try {
    snaptr('track', 'PAGE_VIEW');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(e);
  }
}

export function trackEvent(eventAction = '') {
  try {
    snaptr('track', eventAction);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(e);
  }
}

export function initialize(newTrackerId) {
  try {
    /* eslint-disable */
    (function(e, t, n) {
      if (e.snaptr) return;
      var a = (e.snaptr = function() {
        a.handleRequest
          ? a.handleRequest.apply(a, arguments)
          : a.queue.push(arguments);
      });
      a.queue = [];
      var s = 'script';
      r = t.createElement(s);
      r.async = !0;
      r.src = n;
      var u = t.getElementsByTagName(s)[0];
      u.parentNode.insertBefore(r, u);
    })(window, document, 'https://sc-static.net/scevent.min.js');

    snaptr('init', newTrackerId);

    /* eslint-enable */
    trackPageview();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(e);
  }
}

export default {
  initialize,
  trackPageview,
  trackEvent,
};
