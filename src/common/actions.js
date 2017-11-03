import is from '../data/is.json';
import en from '../data/en.json';
import {
  REVEAL_ANIMATION_FORWARD,
  REVEAL_ANIMATION_BACKWARD,
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

export function revealAnimationForward() {
  return { type: REVEAL_ANIMATION_FORWARD };
}

export function revealAnimationBackward(backButtonPressed) {
  return { type: REVEAL_ANIMATION_BACKWARD, payload: backButtonPressed };
}

export function removePageLoading() {
  return function(dispatch) {
    const minTime = 500;
    const now = new Date();
    const next = new Date();
    const timeDiff = next.getTime() - now.getTime();
    if (timeDiff < minTime) {
      const delay = minTime - timeDiff;
      setTimeout(() => {
        document.body.classList.remove('loading');
        dispatch({ type: REMOVE_PAGE_LOADING });
      }, delay);
    } else {
      document.body.classList.remove('loading');
      return { type: REMOVE_PAGE_LOADING };
    }
  };
}

export function addPageLoading() {
  document.body.classList.add('loading');
  return { type: ADD_PAGE_LOADING };
}
