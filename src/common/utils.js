export function withinViewport(
  unsubscribeEvents,
  selector,
  viewPortClassName,
  callback,
) {
  // Cutting the mustard
  // http://webfieldmanual.com/guides/cutting-the-mustard.html
  if (window.requestAnimationFrame && document.documentElement.classList) {
    // Passes the test so add enhanced class to HTML tag
    document.documentElement.classList.add('enhanced');

    // requestAnimationFrame
    // http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    const _requestAnimationFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame;

    // Global class for revealing element
    const revealer = document.querySelectorAll('.' + selector);

    // Get the viewport (window) dimensions
    const getViewportSize = () => {
      return {
        width: window.document.documentElement.clientWidth,
        height: window.document.documentElement.clientHeight,
      };
    };

    // Get the current scoll position
    const getCurrentScroll = () => {
      return {
        x: window.pageXOffset,
        y: window.pageYOffset,
      };
    };

    // Get element dimensions and position
    const getElemInfo = elem => {
      let offsetTop = 0;
      let offsetLeft = 0;
      let offsetHeight = elem.offsetHeight;
      let offsetWidth = elem.offsetWidth;

      do {// eslint-disable-line
        if (!isNaN(elem.offsetTop)) {
          offsetTop += elem.offsetTop;
        }
        if (!isNaN(elem.offsetLeft)) {
          offsetLeft += elem.offsetLeft;
        }
      } while ((elem = elem.offsetParent) !== null);
      return {
        top: offsetTop,
        left: offsetLeft,
        height: offsetHeight,
        width: offsetWidth,
      };
    };

    // Check visibility of the element in the viewport
    const checkVisibility = elem => {
      const viewportSize = getViewportSize();
      const currentScroll = getCurrentScroll();
      const elemInfo = getElemInfo(elem);
      const spaceOffset = 0.2;
      const elemHeight = elemInfo.height;
      const elemWidth = elemInfo.width;
      const elemTop = elemInfo.top;
      const elemLeft = elemInfo.left;
      const elemBottom = elemTop + elemHeight;
      const elemRight = elemLeft + elemWidth;

      const checkBoundaries = () => {
        // Defining the element boundaries and extra space offset
        const top = elemTop + elemHeight * spaceOffset;
        const left = elemLeft + elemWidth * spaceOffset;
        const bottom = elemBottom - elemHeight * spaceOffset;
        const right = elemRight - elemWidth * spaceOffset;

        // Defining the window boundaries and window offset
        const wTop = currentScroll.y + 0;
        const wLeft = currentScroll.x + 0;
        const wBottom = currentScroll.y - 0 + viewportSize.height;
        const wRight = currentScroll.x - 0 + viewportSize.width;

        // Check if the element is within boundary
        return top < wBottom && bottom > wTop && left > wLeft && right < wRight;
      };

      return checkBoundaries();
    };

    // Run a loop with checkVisibility() and add / remove classes to the elements
    const toggleElement = () => {
      for (let i = 0; i < revealer.length; i++) {
        if (checkVisibility(revealer[i])) {
          revealer[i].classList.add(viewPortClassName);
          if (callback) {
            callback(true, revealer[i]);
          }
        } else {
          revealer[i].classList.remove(viewPortClassName);
          if (callback) {
            callback(false, revealer[i]);
          }
        }
      }
    };

    // Throttle events and requestAnimationFrame
    const scrollHandler = throttle(() => {
      _requestAnimationFrame(toggleElement);
    }, 300);

    const resizeHandler = throttle(() => {
      _requestAnimationFrame(toggleElement);
    }, 300);

    scrollHandler();

    if (unsubscribeEvents) {
      // Listening for events
      if (window.addEventListener) {
        removeEventListener('scroll', scrollHandler, false);
        removeEventListener('resize', resizeHandler, false);
      } else if (window.attachEvent) {
        window.detachEvent('onscroll', scrollHandler);
        window.detachEvent('onresize', resizeHandler);
      } else {
        window.onscroll = null;
        window.onresize = null;
      }

      return false;
    } else {
      // Listening for events
      if (window.addEventListener) {
        addEventListener('scroll', scrollHandler, false);
        addEventListener('resize', resizeHandler, false);
      } else if (window.attachEvent) {
        window.attachEvent('onscroll', scrollHandler);
        window.attachEvent('onresize', resizeHandler);
      } else {
        window.onscroll = scrollHandler;
        window.onresize = resizeHandler;
      }
    }
  }

  // Throttle
  // http://underscorejs.org/#throttle
  function throttle(func, wait, options) {
    const _ = {
      now: Date.now ||
        function() {
          return new Date().getTime();
        },
    };
    let context, args, result;
    let timeout = null;
    let previous = 0;
    if (!options) {
      options = {};
    }
    const later = () => {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) {
        context = args = null;
      }
    };
    return () => {
      const now = _.now();
      if (!previous && options.leading === false) {
        previous = now;
      }
      const remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);

        if (!timeout) {
          context = args = null;
        }
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  }
}
