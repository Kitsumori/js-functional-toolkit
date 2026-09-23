/**
 * Escribe una función range que tome dos argumentos, inicio y fin, y devuelva
 * un array que contenga todos los números desde inicio hasta fin, incluyendo ambos.
 * @param {number} start
 * @param {number} end
 * @param {number} [step]
 * @returns {number[]}
 */
export function range(start, end, step = 1) {
    const array = [];
    if (step > 0) {
        for (let i = start; i <= end; i+=step) {
            array.push(i);
        }
    }
    if (step < 0) {
        for (let i = start; i >= end; i+=step) {
            array.push(i);
        }
    }
    
    return array;
}

/**
 * Toma un array de números y devuelve la suma de los mismos.
 * @param {number[]} array
 * @returns {number}
 */
export function sum(array) {
    return array.reduce((acc, curr) => acc + curr, 0, array);
}

/**
 * Recibe un array y devuelve un nuevo array con los elementos en orden inverso.
 * @param {any[]} array
 * @returns {any[]}
 */
export function reverseArray(array) {
    const reverseArray = [];
    for (let i = array.length -1; i >= 0; i--) {
        reverseArray.push(array[i]);
    }
    return reverseArray;
}

/**
 * Recibe un array y devuelve el mismo array con los elementos en orden inverso.
 * @param {any[]} array
 * @returns {any[]}
 */
export function reverseArrayInPlace(array) {
    for (let i = 0; i < array.length / 2; i++) {
        const j = array.length - 1 - i;
        let mem = array[i];
        array[i] = array[j];
        array[j] = mem;
    }
    return array;
}