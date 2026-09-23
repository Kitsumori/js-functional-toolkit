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