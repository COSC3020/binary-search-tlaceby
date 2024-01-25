
function binarySearch(list = [], element) {
    if (list.length == 0) return -1;
    if (list.length == 1) 
        return list[0] === element ? 0 : -1;
    
    const pivot = Math.floor(list.length / 2);
    const at = list[pivot];

    if (at === element) return pivot;
    else if (at > element) 
        return binarySearch(list.slice(0, pivot), element);

    return binarySearch(list.slice(pivot + 1, list.length), element);
}
