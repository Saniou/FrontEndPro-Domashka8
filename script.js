// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

// const array = [1, 2, 3, 4, 5, 6, 7];
// const removed = array.splice(4, 1)
// console.log(array)

arr = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item){
    array.splice(item, 1) // array.splice(item-1, 1) Щоб номерація починалась з одиниці
}
removeElement(arr, 4)
console.log(arr)
