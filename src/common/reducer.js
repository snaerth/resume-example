import en from '../data/en.json';
import {
  REVEAL_ANIMATION_FORWARD,
  REVEAL_ANIMATION_BACKWARD,
  SET_LANGUAGE,
  ADD_PAGE_LOADING,
  REMOVE_PAGE_LOADING,
} from './types';

const initialState = {
  pageRevealer: false,
  pageRevealerType: 'top',
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

    case REVEAL_ANIMATION_FORWARD:
      return {
        ...state,
        pageRevealer: true,
        pageRevealerType: 'top',
        back: false,
        backButtonPressed: false,
      };

    case REVEAL_ANIMATION_BACKWARD:
      return {
        ...state,
        pageRevealer: true,
        pageRevealerType: 'bottom',
        back: true,
        backButtonPressed: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
