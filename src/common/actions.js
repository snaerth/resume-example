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
    GET_TRANSLATIONS
} from './types';

export function getTranslations(lang) {
    return {type: GET_TRANSLATIONS, payload: lang === 'en' ? en : is};
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
