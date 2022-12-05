// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

// const array = [1, 2, 3, 4, 5, 6, 7];
// const removed = array.splice(4, 1)
// console.log(array)

//-------------------------------------------------

// let arr = ['one', 'two', 'three', 'four']
const arr = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, item){
    return array.filter(remove => remove !== item);
}
// console.log(removeElement(arr, 'two'))
console.log(removeElement(arr, 5))
