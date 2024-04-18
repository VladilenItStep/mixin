let num = 5.12345

num.toString()

// Math.floor 
// Округляет в меньшу сторону 

console.group('Math.floor')
console.log(window.Math.floor(-5.1)) // -6;
console.log(window.Math.floor(-5.9)) // -6;
console.log(window.Math.floor(5.1)) // 5;
console.log(window.Math.floor(5.9)) // 5;
console.groupEnd();

// Math.ceil 
// Округляет в большую сторону

console.group('Math.ceil')
console.log(window.Math.ceil(-5.1)) // -5;
console.log(window.Math.ceil(-5.9)) // -5;
console.log(window.Math.ceil(5.1)) // 6;
console.log(window.Math.ceil(5.9)) // 6;
console.groupEnd();


// Math.round 
// Округляет до ближайшего целого

console.group('Math.round')
console.log(window.Math.round(-5.1)) // -5;
console.log(window.Math.round(-5.9)) // -6;
console.log(window.Math.round(-5.5)) // -5;
console.log(window.Math.round(5.1)) // 5;
console.log(window.Math.round(5.5)) // 6;
console.log(window.Math.round(5.9)) // 6;
console.groupEnd();

// Math.trunc 
// Удаляет дроби без округления

console.group('Math.trunc')
console.log(window.Math.trunc(-5.1)) // -5;
console.log(window.Math.trunc(-5.9)) // -5;
console.log(window.Math.trunc(-5.5)) // -5;
console.log(window.Math.trunc(5.1)) // 5;
console.log(window.Math.trunc(5.5)) // 5;
console.log(window.Math.trunc(5.9)) // 5;
console.groupEnd();


// number.toFixed(n) от 0 до 20 
// фиксирует количество знаков после .

console.group('Math.toFixed')
console.log(num.toFixed()) // 5;
console.log(num.toFixed(0)) // 5;
console.log(num.toFixed(1)) // 5.1;
console.log(num.toFixed(5)) // 5.12345;
console.log(num.toFixed(7)) // 5.1234500;
    // console.log(num.toFixed(-1)) // RangeError;
console.groupEnd();


// 64 бит

// isNaN

console.group('isNaN')
console.log(isNaN(123)); // false - 123 число
console.log(isNaN('123')); // false - 123 можно преобразовать в число
console.log(isNaN('hello')); // true
console.log(isNaN('123hello')); // true
console.log(isNaN('')); // false, пустую строку можно преобразовать в число
console.log(isNaN(false)); // false, false можно преобразовать в число
console.log(isNaN(true)); // false, true можно преобразовать в число
console.log(isNaN(null)); // false, null можно преобразовать в число
console.log(isNaN(NaN)); // true
console.log(isNaN(undefined)); // true
console.log(isNaN(['123'])); // false / Number(['123']) -> 123
console.log(isNaN([123])); // false / Number([123]) -> 123
console.log(isNaN([1, 2])); // false / Number([1, 2]) -> NaN
console.log(isNaN(Infinity)); // false 

console.groupEnd();

// isFinite

console.group('isFinite')
console.log(isFinite(123)); // true - 123 число
console.log(isFinite('123')); // true - 123 можно преобразовать в число
console.log(isFinite('123.12331')); // true -  можно преобразовать в число
console.log(isFinite('123,12331')); // false 
console.log(isFinite('hello')); // false
console.log(isFinite('123hello')); // false
console.log(isFinite('')); // true, пустую строку можно преобразовать в число
console.log(isFinite(false)); // true, false можно преобразовать в число
console.log(isFinite(true)); // true, true можно преобразовать в число
console.log(isFinite(null)); // true, null можно преобразовать в число
console.log(isFinite(NaN)); // false
console.log(isNaN(Infinity)); // false 
console.log(isFinite(undefined)); // false
console.log(isFinite(['123'])); // true / Number(['123']) -> 123
console.log(isFinite([123])); // true / Number([123]) -> 123
console.log(isFinite([1, 2])); // false / Number([1, 2]) -> NaN
console.groupEnd();

//Object.is (window.Object.is())

console.group('Object.is')
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(-0, 0)); // false
console.log(Object.is('Root', 'ROOT')) // false
console.log(Object.is('Root', 'Root')) // true
console.groupEnd();


// parsInt() parseFloat()


console.group('parsInt')
console.log(parseInt('123')); // 123
console.log(parseInt('123hello')); // 123
console.log(parseInt('1hello23')); // 1
console.log(parseInt('hello123')); // NaN
console.log(parseInt(['123'])); // 123
console.log(parseInt(['123hello'])); // 123
console.log(parseInt(['123hello', 'hello'])); // 123
console.log(parseInt(['hello123', 'hello'])); // NaN
console.log(parseInt(32.321)); // 32
console.log(parseInt('32.321')); // 32
console.log(parseInt('.32321')); // NaN
console.log(parseInt('false')); // NaN
console.log(parseInt(false)); // NaN
console.log(parseInt(true)); // NaN
console.log(parseInt('')); // NaN
console.log(parseInt(null)); // NaN
console.groupEnd();


console.group('parseFloat');
console.log(parseFloat('123')); // 123
console.log(parseFloat('123hello')); // 123
console.log(parseFloat('1hello23')); // 1
console.log(parseFloat('hello123')); // NaN
console.log(parseFloat(['123'])); // 123
console.log(parseFloat(['123hello'])); // 123
console.log(parseFloat(['123hello', 'hello'])); // 123
console.log(parseFloat(['hello123', 'hello'])); // NaN
console.log(parseFloat(32.321)); // 32.321
console.log(parseFloat('32.321')); // 32.321
console.log(parseFloat('.32321')); // 0.32321
console.log(parseFloat('false')); // NaN
console.log(parseFloat(false)); // NaN
console.log(parseFloat(true)); // NaN
console.log(parseFloat('')); // NaN
console.log(parseFloat(null)); // NaN
console.groupEnd();

//Math.max()
console.group('Math.max()')
console.log(Math.max(3, 5, 10, 200, -1)); // 200
console.log(Math.max(NaN, 3, 5, 10, 200, -1)); // NaN
console.log(Math.max('hello', 3, 5, 10, 200, -1)); // NaN
console.log(Math.max(3, 5, 10, 200, -1, 'hello')); // NaN
console.log(Math.max(3, 5, 10, 200, -1, '', true, false, null)); // 200
console.groupEnd();


//Math.min()
console.group('Math.min()')
console.log(Math.min(3, 5, 10, 200, -1)); // -1
console.log(Math.min(NaN, 3, 5, 10, 200, -1)); // NaN
console.log(Math.min('hello', 3, 5, 10, 200, -1)); // NaN
console.log(Math.min(3, 5, 10, 200, -1, 'hello')); // NaN
console.log(Math.min(3, 5, 10, 200, -1, '', true, false, null)); // -1
console.groupEnd();

//Math.random()
console.log(Math.random());


//Получение случайного числа в заданном интервале
function getRandomArbitrary(min, max) {
    console.log(parseInt(Math.random() * (max - min) + min))
}