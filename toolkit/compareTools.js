import { SCRIPTS } from "../data/scripts"

/**
 * Check equality between two array elements
 * @param {any[]} arrayOne
 * @param {any[]} arrayTwo
 * @return {boolean}
 */
function checkArrayElementsEquality(arrayOne, arrayTwo) {
    const isEqual = [];
    for (let i = 0; i < arrayOne.length; i++)
    {
        isEqual.push(arrayOne[i] === arrayTwo[i])
    }

    if (isEqual.includes(false)) return false
    return true
}

/**
 * Check equality between objects
 * @param {Object} objectOne
 * @param {Object} objectTwo
 * @return {boolean}
 */
function checkObjectElementsEquality(objectOne, objectTwo) {
    const objectKeysOne = Object.keys(objectOne)
    const objectKeysTwo = Object.keys(objectTwo)
    const isEqual = []
    if (objectKeysOne.length !== objectKeysTwo.length) return false
    for (let i = 0; i < objectKeysOne.length; i++) {
        isEqual.push(objectOne[objectKeysOne[i]] === objectTwo[objectKeysTwo[i]])
    }
    return !isEqual.includes(false)
}

/**
 * Deep compare of two elements
 * @param {any} elementOne
 * @param {any} elementTwo
 * @return {boolean}
 */
export function deepEqual(elementOne, elementTwo) {
    if (typeof elementOne === typeof elementTwo) {
        
        if (typeof elementOne == "object") {
            if (Array.isArray(elementOne) && Array.isArray(elementTwo)) {
                if (elementOne.length != elementTwo.length) return false
                return checkArrayElementsEquality(elementOne, elementTwo);
            }
            
            if (elementOne === null) return false

            const elementOneKeys = Object.keys(elementOne)
            const elementTwoKeys = Object.keys(elementTwo)

            if (elementOneKeys.length != elementTwoKeys.length) return false
            
            return checkObjectElementsEquality(elementOne, elementTwo);
        }

        if (typeof elementOne === "string") {
            if (elementOne.length !== elementTwo.length) return false
            return checkArrayElementsEquality(elementOne, elementTwo);
        }

        if (typeof elementOne === "number") {
            return elementOne === elementTwo
        }
    }

    return false
}

/**
 * Toma un valor, una funcion de prueba, una funcion de actualizacion y una funcion cuerpo
 * @param {any} initialValue
 * @param {(any) => boolean} verificationCallback
 * @param {(any) => any} updateCallback
 * @param {(any) => any} bodyCallback
 */
export function ownBucle(initialValue, verificationCallback, updateCallback, bodyCallback) {
    let value = initialValue
    while (!verificationCallback(value)) {
        bodyCallback(value)
        value = updateCallback(value)
    }
}

/**
 * Toma un texto y devuelve que rasgo de escritura tiene: 
 * - dominancia derecha "rtl" 
 * - dominancia izquierda "ltr"
 * - dominancia de arriba hacia abajo "ttb"
 * @param {string} text
 * @return {string} ltr | rtl | ttb
 */
export function dominantWritingDirection(text) {
    let ltr = 0
    let rtl = 0
    let ttb = 0

    const sumTo = (direction) => {
        if (direction === "ltr") ltr += 1
        if (direction === "rtl") rtl += 1
        if (direction === "ttb") ttb += 1
    }
    const directionDominantIs = () => {
        let dominant = ""
        if (ltr > rtl && ltr > ttb) dominant = "ltr"
        else if (rtl > ltr && rtl > ttb) dominant = "rtl"
        else dominant = "ttb"
        return dominant
    }

    const verifyRanges = (ranges, charCode) => {
        for (let range of ranges) {
            if (charCode >= range[0] && charCode <= range[1]) return true
        }
        return false
    }

    for (let i = 0; i < text.length; i++) {
        let charCode = text.codePointAt(i)
        for (let script of SCRIPTS) {
            if (verifyRanges(script.ranges, charCode)) {
                sumTo(script.direction)
                break
            }
        }
    }

    return directionDominantIs()
}