import is from '../data/is.json';
import {
  REVEAL_ANIMATION_FORWARD,
  REVEAL_ANIMATION_BACKWARD,
  SET_LANGUAGE,
  ADD_PAGE_LOADING,
  REMOVE_PAGE_LOADING
} from './types';

const initialState = {
  pageRevealer: false,
  pageRevealerType: 'top',
  translations: is,
  lang: 'is'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PAGE_LOADING:
      return {
        ...state,
        pageRevealer: false
      };

    case REMOVE_PAGE_LOADING:
      return {
        ...state,
        pageRevealer: false
      };

    case SET_LANGUAGE:
      return {
        ...state,
        translations: action.payload.translations,
        pageRevealer: false,
        lang: action.payload.lang
      };

    case REVEAL_ANIMATION_FORWARD:
      return {
        ...state,
        pageRevealer: true,
        pageRevealerType: 'top',
        back: false,
        backButtonPressed: false
      };

    case REVEAL_ANIMATION_BACKWARD:
      return {
        ...state,
        pageRevealer: true,
        pageRevealerType: 'bottom',
        back: true,
        backButtonPressed: action.payload
      };

    default:
      return {
        ...state
      };
  }
}
