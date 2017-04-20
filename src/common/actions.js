import is from '../data/is.json';
import en from '../data/en.json';
import {
  PAGE_REVEALER_START,
  PAGE_REVEALER_STOP,
  SHOW_PAGE,
  HIDE_PAGE,
  PAGE_ANIMATION_FORWARD,
  PAGE_ANIMATION_BACKWARD,
  RESUME_BACK_ANIMATION,
  SET_LANGUAGE,
  ADD_PAGE_LOADING,
  REMOVE_PAGE_LOADING,
} from './types';

export function setLanguage(lang) {
  return {
    type: SET_LANGUAGE,
    payload: {
      translations: lang === 'is' ? is : en,
      lang: lang || 'en',
    },
  };
}

export function pageAnimationForward() {
  return {type: PAGE_ANIMATION_FORWARD};
}

export function pageAnimationBackward() {
  return {type: PAGE_ANIMATION_BACKWARD};
}

export function pageRevealerStart(payload) {
  return {type: PAGE_REVEALER_START, payload};
}

export function pageRevealerStop() {
  return {type: PAGE_REVEALER_STOP};
}

export function showPage() {
  return {type: SHOW_PAGE};
}

export function hidePage() {
  return {type: HIDE_PAGE};
}

export function resumeBackAnimation() {
  return {type: RESUME_BACK_ANIMATION};
}

export function removePageLoading() {
  return function(dispatch) {
    const minTime = 1000;
    const now = new Date();
    const next = new Date();
    const timeDiff = next.getTime() - now.getTime();
    if (timeDiff < minTime) {
      const delay = minTime - timeDiff;
      setTimeout(() => {
        document.body.classList.remove('loading');
        dispatch({type: REMOVE_PAGE_LOADING});
      }, delay);
    } else {
      document.body.classList.remove('loading');
      return {type: REMOVE_PAGE_LOADING};
    }
  };
}

export function addPageLoading() {
  document.body.classList.add('loading');
  return {type: ADD_PAGE_LOADING};
}
