/**
 * React Snapchat Tracking Module
 *
 * @package react-tracking-snapchat
 * @author Alexander Barge <alexander.barge@gmail.com>
 */

export function trackPageview() {
  try {
    window.snaptr('track', 'PAGE_VIEW');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(e);
  }
}

export function trackEvent(eventAction = '', eventParams = {}) {
  try {
    window.snaptr('track', eventAction, eventParams);
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
      const a = (e.snaptr = function() {
        a.handleRequest
          ? a.handleRequest.apply(a, arguments)
          : a.queue.push(arguments);
      });
      a.queue = [];
      const s = 'script';
      const r = t.createElement(s);
      r.async = !0;
      r.src = n;
      const u = t.getElementsByTagName(s)[0];
      u.parentNode.insertBefore(r, u);
    })(window, document, 'https://sc-static.net/scevent.min.js');
    /* eslint-enable */

    window.snaptr('init', newTrackerId);
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
