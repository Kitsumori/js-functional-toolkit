export const box = new class {
    locked = true;
    #content = [];
    unlock() { this.locked = false; }
    lock() { this.locked = true; }
    get content() {
        if (this.locked) throw new Error("¡Cerrado con llave!");
        return this.#content;
    }
};

export function withBoxUnlocked(fn) {
    const wasLocked = box.locked
    if (box.locked) box.unlock()
    try {
        return fn()
    } finally {
        if (wasLocked) box.lock()
    }
    
}