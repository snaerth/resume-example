import {
    PAGE_REVEALER_START,
    PAGE_REVEALER_STOP,
    SHOW_PAGE, 
    HIDE_PAGE,
    PAGE_ANIMATION_FORWARD,
    PAGE_ANIMATION_BACKWARD
} from './types';

export function pageAnimationForward() {
    return { type: PAGE_ANIMATION_FORWARD };
}

export function pageAnimationBackward() {
    return { type: PAGE_ANIMATION_BACKWARD };
}

export function pageRevealerStart(payload) {
    return { type: PAGE_REVEALER_START, payload };
}

export function pageRevealerStop() {
    return { type: PAGE_REVEALER_STOP };
}

export function showPage() {
    return { type: SHOW_PAGE };
}

export function hidePage() {
    return { type: HIDE_PAGE };
}