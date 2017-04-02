import {PAGE_REVEALER_START, PAGE_REVEALER_STOP} from './types';

const initialState = {
  pageRevealer: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PAGE_REVEALER_START:
      return {
        ...state,
        pageRevealer: true
      };
    case PAGE_REVEALER_STOP:
      return {
        ...state,
        pageRevealer: false
      };
    default: 
      return {...state};
  }
}