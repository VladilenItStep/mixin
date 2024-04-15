// 'use strict'


let userName = 'Vlad'

console.log(userName.length); // 4
console.log(userName[0]); // V
console.log(userName[15]); // undefined
console.log(userName[-1]); // undefined
console.log(userName.charAt(0)); // 'V'
console.log(userName.charAt(-1)); // ''
console.log(userName.charAt(15)); // ''
console.log(userName.charAt(userName.length - 1)); // 'd'
console.log(userName.at(0)); // 'V'
console.log(userName.at(-1)); // 'd'
console.log(userName.at(15)); // 'undefined'

// Перебор строки
for (let i = 0; i <= userName.length - 1; i++) {
    if (i === 0) {
        continue
    }
    console.log('for ', userName[i]);
}


function foo() {
    for (let i in userName) {
        if (i === '0') continue
        console.log('in', userName[i]);
    }

    for (let letter of userName) {
        if (letter === 'V') {
            continue
        }
        console.log('of', letter);
    }
}


foo()

userName.toLowerCase()
userName.toUpperCase()


const srtForMethodIndexOf = 'Это строка для теста метода IndexOf'

console.log(srtForMethodIndexOf.indexOf('для')) // 11
console.log(srtForMethodIndexOf.indexOf('для', -12)) // 11 (-12 игнорирует)
console.log(srtForMethodIndexOf.indexOf('для', 12)) // -1
console.log(srtForMethodIndexOf.indexOf('Это')) // -1

if (srtForMethodIndexOf.indexOf('Это')) {
    console.log('Код не выполнится');
}

if (~srtForMethodIndexOf.indexOf('Это')) {
    console.log('Код выполнится');
}

const stringTask1 = 'Меня зовут влад, тебя зовут влад тоже'

function findAllOccurrences(text, searchText) {
    let occurrences = []
    let index = text.indexOf(searchText)

    while (index !== -1) {
        occurrences.push(index)
        index = text.indexOf(searchText, index + 1)
    }
    return occurrences
}


console.log(findAllOccurrences(stringTask1, 'влад'))

console.log(stringTask1.includes('влад'))

const stringTask2_1 = '!@#$.T'
const stringTask2_2 = 'Cat!@#$.'
const stringTask2_3 = '!321312dawdaada@#$.T'

function checkAllCharactes(str1, str2) {
    const requiredSymbolLength = str1.length
    let counter = 0
    for (let char of str1) {
        if (!str2.includes(char)) {
            console.log('checkAllCharactes', false);
            return false
        } else {
            console.log('checkAllCharactes', true);
            counter++
        }
    }
    return counter === requiredSymbolLength
}

console.log(checkAllCharactes(stringTask2_1, stringTask2_2));

console.log(stringTask1);

console.log(stringTask1.slice(0, 3));
console.log(stringTask1.slice(-4, -1));


console.log(stringTask1);
console.log(stringTask1.replace('влад', 'Влад'))
console.log(stringTask1.replaceAll('влад', 'Влад'))
console.log(stringTask1);


const badWords = ['Собака', 'Петух', 'Козель']

const userIncorrectMessage = 'Эй ты, Петух. Я сказал Петух'
const userCorrectMessage = 'Эй ты, Чел!'

function filterMessage(message) {

    let filtredMessage = message

    for (let word of badWords) {
        filtredMessage = filtredMessage.replaceAll(word, '*'.repeat(word.length))
    }
    return filtredMessage
}

console.log(filterMessage(userIncorrectMessage)); // 'Эй ты, *****'
console.log(filterMessage(userCorrectMessage)); // 'Эй ты, Чел!'



// STRING
// length
// at
// charAt
// for
// for in
// for of
// toLowerCase
// toUpperCase
// str.indexOf(substr [, pos])
// str.lastIndexOf(substr [, pos])
// includes (startsWith, endsWith)
// slice(start [,end])
// substring(), substr()
// trim()
// replace()
// replaceAll()
// repeat()