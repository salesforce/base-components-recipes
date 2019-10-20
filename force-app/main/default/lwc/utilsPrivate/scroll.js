export function raf(fn) {
    let ticking = false;
    return function(event) {
        if (!ticking) {
            requestAnimationFrame(() => {
                fn.call(this, event);
                ticking = false;
            });
        }
        ticking = true;
    };
}
