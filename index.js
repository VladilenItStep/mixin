// const screen = window.document.getElementsByTagName('input')
// const screen = window.document.getElementsByClassName('calc__screen temp')
// const clearBtn = document.getElementById('clearCE')
// const nums = document.getElementsByName('vlad')
// const sum = document.querySelector('.calc .calc__btn-container  .btn-minus')
// const sum2 = document.querySelectorAll('.btn')


const clearBtn = document.getElementById('clearC')
const screen = window.document.querySelector('.calc__screen')
const calc = document.querySelector('.calc__btn-container')

const OPERATION = {
    sum: '+',
    subtract: '-',
    multiply: '*',
    divide: '/',

}


const calculateData = {
    num1: '',
    num2: '',
    sign: '',
    result: '',
}

function sum(num1, num2) {
    return (+num1) + (+num2)
}

function subtract(num1, num2) {
    return (+num1) - (+num2)
}

function multiply(num1, num2) {
    return (+num1) * (+num2)
}

function divide(num1, num2) {
    return (+num1) / (+num2)
}

function calculate(num1, num2, sign) {
    switch (sign) {
        case OPERATION.sum:
            calculateData.result = String(sum(num1, num2))
            break;
        case OPERATION.subtract:
            calculateData.result = String(subtract(num1, num2))
            break;
        case OPERATION.multiply:
            calculateData.result = String(multiply(num1, num2))
            break;
        case OPERATION.divide:
            calculateData.result = String(divide(num1, num2))
            break;
    }
}


clearBtn.addEventListener('click', function(event) {
    console.log('Start Clear');
    calculateData.num1 = ''
    calculateData.num2 = ''
    calculateData.sign = ''
    screen.value = ''
})

function onClickDigits(event) {

    if (event.target.classList.contains('digit')) {
        const pressNum = event.target.textContent

        if (calculateData.sign === '') {
            screen.value += pressNum
            calculateData.num1 = screen.value
        } else {
            calculateData.num2 += pressNum
            screen.value = calculateData.num2
        }
    }

}


function onClickOperations(event) {
    if (event.target.classList.contains('btn_operation')) {
        const pressOperator = event.target.textContent
        calculateData.sign = pressOperator
        screen.value = pressOperator
    }

    if (event.target.classList.contains('btn_equal')) {
        console.log('btn_equal');
        calculateData.num1 = calculateData.result
        calculateData.num2 = ''
        calculateData.sign = ''
        screen.value = calculateData.num1
    }
}

calc.addEventListener('click', function(event) {

    onClickDigits(event)
    onClickOperations(event)
    calculate(calculateData.num1, calculateData.num2, calculateData.sign)

})