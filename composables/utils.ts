
export function arrayShiftRight (arr: number[]) {
    const lastElement = arr.pop(); // Remove the last element
    if (lastElement) arr.unshift(lastElement); // Add the last element to the beginning of the array
    return arr;
}