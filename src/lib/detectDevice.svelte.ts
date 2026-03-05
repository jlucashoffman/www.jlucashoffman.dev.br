const detectTouchDevice = (): boolean => {
    if (typeof window === 'undefined') return false;
    return navigator.maxTouchPoints > 0 || 'ontouchstart' in window;
};

class Device {
    isTouch = $state(detectTouchDevice());
}

export const deviceState = new Device();