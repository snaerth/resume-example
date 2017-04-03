import {
    PAGE_REVEALER_START,
    PAGE_REVEALER_STOP,
    SHOW_PAGE, 
    HIDE_PAGE
} from './types';


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