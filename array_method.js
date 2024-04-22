/*
Array.prototype.push()
_____________________


console.group('Array.prototype.push()')
let testArrayPush = [1, 2, 3, 4, 5]
console.log('before push', testArrayPush);
console.log(testArrayPush.push(7));
console.log('after push', testArrayPush);
console.groupEnd()



Array.prototype.pop()
_____________________

console.group('Array.prototype.pop()')
let testArrayPop = [1, 2, 3, 4, 5]
console.log('before pop', testArrayPop);
console.log(testArrayPop.pop());
console.log(testArrayPop.pop(5));
console.log('after pop', testArrayPop);
console.groupEnd()


Array.prototype.splice()
_____________________

console.group('Array.prototype.splice()')
let testArraySplice = [1, 2, 3, 4, 5]
console.log('before splice', testArraySplice);
// console.log(testArraySplice.splice()); // []
// console.log(testArraySplice.splice(0)); //[1, 2, 3, 4, 5]
// console.log(testArraySplice.splice(1)); // [2,3,4,5]
// console.log(testArraySplice.splice(-1)); // [5]
// console.log(testArraySplice.splice(5)); // []
// console.log(testArraySplice.splice(0, 0)); // []
// console.log(testArraySplice.splice(0, 1)); // [1]
// console.log(testArraySplice.splice(0, 22)); //[1, 2, 3, 4, 5]
// console.log(testArraySplice.splice(0, -2)); // []
// console.log(testArraySplice.splice(0, 1, 'replace item')); // [1]
// console.log(testArraySplice.splice(0, 2, 'replace item')); // [1, 2]
// console.log(testArraySplice.splice(0, 2, 'replace item1', 'replace item2')); // [1, 2]
// console.log(testArraySplice.splice(1, 0, 'add item1', 'add item2')); // []
console.log('after splice', testArraySplice);
console.groupEnd()


Array.prototype.slice()
_____________________

console.group('Array.prototype.slice()')
let testArraySlice = [1, 2, 3, 4, 5, { name: 'Vlad' }]
console.log('before splice', testArraySlice);
// console.log('return value', newArray = testArraySlice.slice(), newArray === testArraySlice)
// console.log('return value', testArraySlice.slice(0))
// console.log('return value', testArraySlice.slice(2))
// console.log('return value', testArraySlice.slice(-2))
// console.log('return value', testArraySlice.slice(6)) // []
// console.log('return value', testArraySlice.slice(0, 4)) 
// console.log('return value', testArraySlice.slice(0, 0)) // []
// console.log('return value', testArraySlice.slice(1, -1)) 
console.log('after splice', testArraySlice);
console.groupEnd()



Array.prototype.concat()
_____________________
console.group('Array.prototype.concat()')
let testArrayConcat1 = [1, 2, 3, 4, 5, { name: 'Vlad' }]
let testArrayConcat2 = [6, 7, 8, 9, 0, { name: 'Alina' }]

console.log('before concat1', testArrayConcat1);
console.log('before concat2', testArrayConcat2);
// console.log('return value', newArray = testArrayConcat1.concat(), newArray === testArrayConcat1, newArray === testArrayConcat2);
// console.log('return value', testArrayConcat1.concat(testArrayConcat2));
// console.log('return value', testArrayConcat1.concat(testArrayConcat2, 'add item', 101, { car: 'BMW' }));
// console.log('return value', testArrayConcat1.concat(testArrayConcat2, [101]));
// console.log('return value', testArrayConcat1.concat(testArrayConcat2, [
//     [101]
// ]));

console.log('after concat1', testArrayConcat1);
console.log('after concat2', testArrayConcat2);

console.groupEnd()


Array.prototype.forEach()
_____________________
console.group('Array.prototype.forEach()')
let testArrayForEach = [1, 2, 3, 4, 5, { name: 'Vlad' }]

console.log('before forEach', testArrayForEach);

testArrayForEach.forEach((element, index, array) => {
    console.log(element);
    console.log(index);
    console.log(array);
    // if (index == 2) return;
    // if (index == 1) array.push(7);
    // if (index === 1) array.splice(index + 1, 0, 'add item')
    // if (index === 1) array.splice(index + 1, 1)
    // element = element + 2 // игнорируется
    // if (typeof element !== 'object') {
    //     array[index] = Math.pow(element, 2)
    // } else {
    //     element.name = 'Alina'
    // }
})

console.log('after forEach', testArrayForEach);

console.groupEnd()


Array.prototype.find()
_____________________

*/
// _____________________


console.group('Array.prototype.find()')
let testArrayFind = [1, 2, '2', 3, 4, 5, { name: 'Vlad' }]

console.log('before find', testArrayFind);

console.log(testArrayFind.find((element, index, array) => {
    if (typeof element !== 'number') return true
}))

console.log('after find', testArrayFind);

console.groupEnd()

const users = [
    { id: 1, name: 'Влад' },
    { id: 2, name: 'Петя' },
    { id: 3, name: '' },
    { id: 4, name: 'Дима' },
]



function foo1(userList, targetName) {
    const foundObj = userList.find((element) => !element.name)
    foundObj.name = targetName

    // userList.forEach((element) => {
    //     if (element.name === '') {
    //         element.name = targetName
    //             // return true
    //     }
    // })
}

foo1(users, 'Тоня')