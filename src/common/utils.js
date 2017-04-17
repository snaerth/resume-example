const body = document.getElementsByTagName('body')[0];

export function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export function addScrollListeners(handler) {
  if (window.addEventListener) {
    body.addEventListener('DOMContentLoaded', handler, false);
    body.addEventListener('load', handler, false);
    body.addEventListener('scroll', handler, false);
    body.addEventListener('resize', handler, false);
  } else if (window.attachEvent) {
    body.attachEvent('onDOMContentLoaded', handler); // IE9+ :(
    body.attachEvent('onload', handler);
    body.attachEvent('onscroll', handler);
    body.attachEvent('onresize', handler);
  }
}

export function removeScrollListeners(handler) {
  if (window.addEventListener) {
    body.removeEventListener('DOMContentLoaded', false);
    body.removeEventListener('load', handler, false);
    body.removeEventListener('scroll', handler, false);
    body.removeEventListener('resize', handler, false);
  } else if (window.attachEvent) {
    body.window.detachEvent('onDOMContentLoaded', handler); // IE9+ :(
    body.window.detachEvent('onload', handler);
    body.window.detachEvent('onscroll', handler);
    body.window.detachEvent('onresize', handler);
  }
}
