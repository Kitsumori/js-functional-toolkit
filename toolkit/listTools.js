/**
 * @typedef {Object} ListNode
 * @property {number} value
 * @property {ListNode|null} rest
 */

/**
 * From array to list
 * @param {any[]} array
 * @returns {ListNode}
 */
export function arrayToList(array) {
    let list = null
    for (let i = array.length - 1; i >= 0; i--) {
        if (list === null) list = {value: array[i], rest: null};
        else list = {value: array[i], rest: {...list}}
    }
    return list
}

/**
 * Given a list return an array
 * @param {ListNode} list
 * @return {number[]}
 */
export function listToArray(list) {
    const array = [];
    let next = true
    
    while (next) {
        array.push(list.value);
        list = list.rest
        if (list === null) next = false
    }
    return array
}

/**
 * Given an element and a list return a new list with the element at the beginning of the list
 * @param {ListNode} element
 * @param {ListNode} list
 * @return {ListNode}
 */
export function prepend(element, list) {
    const elementValues = listToArray(element);
    const listValues = listToArray(list)
    const arrayToConvert = [...elementValues, ...listValues]
    const result = arrayToList(arrayToConvert)
    return result
}

/**
 * Find the value in the list
 * @param {ListNode} list
 * @param {number} position
 * @return {number|undefined}
 */
export function nth(list, position) {
    const listValues = listToArray(list)
    if (listValues.length > position) return listValues[position]
    return undefined
}