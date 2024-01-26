/**
 * Finds the first occurance of a element inside a sorted array. If the elemrnt is not found
 * then returns -1.
 * @param {number[]} list A sorted array
 * @param {number} element The element to look for.
 * @returns {number} the index or -1 of the first occurance.
 */
function binarySearch(list, element) {
    let left = 0;
    let right = list.length - 1;
    let result = -1;
    
    while (left <= right) {
        const pivot = Math.floor((left + right) / 2);
        const pivotEl = list[pivot];

        if (pivotEl === element) {
            result = pivot;
            // Find first duplicate in array by traversing
            // to the left most occurance.
            right = pivot - 1;  
        }
        else if (pivotEl < element) left = pivot + 1;
        else right = pivot - 1;
        
    }

    return result;
}
