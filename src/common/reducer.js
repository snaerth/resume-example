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
  REMOVE_PAGE_LOADING
} from './types';

const initialState = {
  pageRevealer: false,
  pageRevealerType: 'top',
  showPage: false,
  resumeBackAnimation: false,
  translations: en,
  lang: 'en',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PAGE_LOADING:
      return {...state};

    case REMOVE_PAGE_LOADING:
      return {...state};

    case SET_LANGUAGE:
      return {
        ...state,
        translations: action.payload.translations,
        lang: action.payload.lang,
      };

    case RESUME_BACK_ANIMATION:
      return {
        ...state,
        resumeBackAnimation: true,
      };

    case PAGE_ANIMATION_FORWARD:
      return {
        ...state,
        pageRevealer: true,
        showPage: true,
        pageRevealerType: 'top',
      };

    case PAGE_ANIMATION_BACKWARD:
      return {
        ...state,
        pageRevealer: true,
        showPage: false,
        pageRevealerType: 'bottom',
      };

    case PAGE_REVEALER_START:
      return {
        ...state,
        pageRevealer: true,
        pageRevealerType: action.payload,
      };

    case PAGE_REVEALER_STOP:
      return {
        ...state,
        pageRevealer: false,
      };

    case SHOW_PAGE:
      return {
        ...state,
        showPage: true,
      };

    case HIDE_PAGE:
      return {
        ...state,
        showPage: false,
      };

    default:
      return {
        ...state,
      };
  }
}
