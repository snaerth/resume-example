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
    SET_LANGUAGE
} from './types';

export function setLanguage(lang) {
    return {
        type: SET_LANGUAGE,
        payload: {
            translations: lang === 'is'
                ? is
                : en,
            lang: lang || 'en'
        }
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
