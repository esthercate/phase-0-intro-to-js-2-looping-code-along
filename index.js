// Code your solutions in this file
function writeCards(arr, message) {
    let result = [];
    for (let item in arr) {
        result.push(`Thank you, ${arr[item]}, for the wonderful ${message} gift!`);
    }
    return result;
}

function countDown() {
    let downCount = 11;
    while (downCount > 0) {
        downCount--;
        console.log(downCount)
    }
}
