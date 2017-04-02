import {
    PAGE_REVEALER_START,
    PAGE_REVEALER_STOP
} from './types';


export function pageRevealerStart() {
    return { type: PAGE_REVEALER_START };
}

export function pageRevealerStop() {
    return { type: PAGE_REVEALER_STOP };
}