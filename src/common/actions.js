import {
    PAGE_REVEALER_START,
    PAGE_REVEALER_STOP,
    SHOW_PAGE, 
    HIDE_PAGE
} from './types';


export function pageRevealerStart() {
    return { type: PAGE_REVEALER_START };
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