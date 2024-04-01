// const screen = window.document.getElementsByTagName('input')
// const screen = window.document.getElementsByClassName('calc__screen temp')
// const clearBtn = document.getElementById('clearCE')
// const nums = document.getElementsByName('vlad')
// const sum = document.querySelector('.calc .calc__btn-container  .btn-minus')
// const sum2 = document.querySelectorAll('.btn')


const clearBtn = document.getElementById('clearC')
const screen = window.document.getElementsByClassName('calc__screen temp')
const calc = document.querySelector('.calc__btn-container')
console.dir(calc);


const printLog = function() {
    console.log(' YRAAAAA! CLICK!!!!!!!!!')
}

// let userName = {
//     firstName: null,
//     sayHi() {
//         console.log('Привет');
//     }
// }

// userName.firstName = "Vlad"
// console.log(userName.firstName);

// userName.sayHi()

// userName.sayHi = 'тут был метод'
// userName.sayHi()

// clearBtn.onclick = printLog

console.dir(clearBtn);
clearBtn.addEventListener('click', function(event) {
    console.log(event);
    console.dir(event.target.textContent);
    printLog()
})


const digits = document.querySelectorAll('.digit')
console.log(digits);

// for (let i = 0; i < digits.length; i++) {
//     digits[i].addEventListener('click', function(event) {
//         screen[0].value = event.target.textContent
//     })
// }

calc.addEventListener('click', function(event) {
    console.dir(event.target);
    if (event.target.classList.contains('digit')) {
        screen[0].value = event.target.textContent
    }
})

// получение элментов 
// не забывать что некоторые способы возвращают коллекцию
// что такое событие?
// 3 способа навесить слушатель события на элемент
// знать addEventListener, какие аргументы нужно передавать
// что приходит в качестве параметра в передаваемый второй аргумент 
// что такое target
// classList, attributes, classList.contains