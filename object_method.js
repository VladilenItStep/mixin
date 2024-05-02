const car = 'bmw';

const obj = {
    name: 'Vlad',
    age: 32,
    car: undefined,
    price: 30,
    product: 'РКО'

}

let obj2 = {
    "uid": "48b2e080-7d95-4f2a-a798-46cd3021e79c",
    "application_type": 227,
    "location_type": 59,
    "banner_type": "catalogueAction",
    "sort": 202,
    "href": "/catalog?category=8142",
    "src": "",
    "alt": "Футболки",
    "culture": "ru",
    "end_date": "2025-11-19T21:00:00Z",
    "start_date": "2023-11-30T21:00:00Z",
    "promo_text": "Футболки",
    "country_bitmask": 4127
}

function foo({ src, sort }) {
    if (!!src) {
        console.log(`Картинка находится по адресу: ${src}`);
    } else {
        console.log(`Картинки нет, воспользуйся ${sort}`);
    }


}
// let {src } = obj2
foo(obj2)



const copyObj = {...obj2 }
delete obj2.uid
console.log(obj2);
console.log(copyObj);


const carsList2 = [
    [undefined, null, '', NaN, , false], 'shkoda', 'bwm', { name: 'Vlad' }
]

const copyArray = [...carsList2]
carsList2.pop()
console.log(carsList2);
console.log(copyArray);






// const arrTest = ['a', [1, [{ name: 'vlad' }]]]

// let [el1, [el2, [el3]]] = arrTest

// console.log('el1', el1);
// console.log('el2', el2);
// console.log('el3', el3);