console.group('Варианты использования без this');

const userPro1 = {
    objectName: 'userPro1',
    name: 'Vlad',
    profession: 'Front-End',
    introduce: function() {
        console.log(`Hello from ${userPro1.objectName}!
        My name is ${userPro1.name} and I am a ${userPro1.profession}`);
    }
}

userPro1.introduce()

const userSimple1 = {
    objectName: 'userSimple1',
    name: 'Nick',
    profession: 'Back-End',
    introduce: function() {
        console.log(`Hello from ${userSimple1.objectName}!
        My name is ${userSimple1.name} and I am a ${userSimple1.profession}`);
    }
}

userSimple1.introduce()

function introduce() {
    console.log(`Hello from ${userPro2.objectName}!
        My name is ${userPro2.name} and I am a ${userPro2.profession}`);
}

const userPro2 = {
    objectName: 'userPro2',
    name: 'Vlad',
    profession: 'Front-End',
    introduce: introduce
}

userPro2.introduce()

function introduce2() {
    console.log(`Hello from ${userSimple2.objectName}!
        My name is ${userSimple2.name} and I am a ${userSimple2.profession}`);
}

const userSimple2 = {
    objectName: 'userSimple2',
    name: 'Nick',
    profession: 'Back-End',
    introduce: introduce2
}


userSimple2.introduce()


function introduce3(obj) {
    console.log(`Hello from ${obj.objectName}!
        My name is ${obj.name} and I am a ${obj.profession}`);
}

let userPro3 = {
    objectName: 'userPro3',
    name: 'Vlad',
    profession: 'Front-End',
    introduce: introduce3
}

userPro3.introduce(userPro3)

const userSimple3 = {
    objectName: 'userSimple3',
    name: 'Nick',
    profession: 'Back-End',
    introduce: introduce3
}

userSimple3.introduce(userSimple3)

const userProCopyLink = userPro3

userPro3 = null

userProCopyLink.introduce(userProCopyLink)

let userPro4 = {
    objectName: 'userPro4',
    name: 'Vlad',
    profession: 'Front-End',
    introduce: function() {
        console.log(`Hello from ${userPro4.objectName}!
        My name is ${userPro4.name} and I am a ${userPro4.profession}`);
    }
}

userPro4.introduce()

const userProCopyLink2 = userPro4

// userPro4 = null
// userPro4.introduce = null

// userProCopyLink2.introduce()

console.groupEnd()

console.group('Работа с This')


let userPro5 = {
    objectName: 'userPro5',
    name: 'Vlad',
    profession: 'Front-End',
    introduce: function() {
        console.log(`Hello from ${this.objectName}!
        My name is ${this.name} and I am a ${this.profession}`);
    }
}

userPro5.introduce()

const userSimple5 = {
    objectName: 'userSimple5',
    name: 'Nick',
    profession: 'Back-End',
    introduce: userPro5.introduce
}

userSimple5.introduce()


function introduce4() {
    console.log(this);
    console.log(`Hello from ${this.objectName}!
        My name is ${this.name} and I am a ${this.profession}`);
}

let userPro6 = {
    objectName: 'userPro6',
    name: 'Vlad',
    profession: 'Front-End',
    car: {
        model: {
            name: 'BMW',
            profession: 'SPORT',
            introduce: introduce4
        }
    }

}

userPro6.car.model.introduce()


const userSimple6 = {
    objectName: 'userSimple6',
    name: 'Nick',
    profession: 'Back-End',
    introduce: introduce4
}

userSimple6.introduce()

console.groupEnd()




const userSimple7 = {
    objectName: 'userSimple7',
    name: 'Nick',
    profession: 'Back-End',
    introduce() {
        console.log(this);
        console.log(`Hello from ${this.objectName}!
                My name is ${this.name} and I am a ${this.profession}`);

    }
}

userSimple7.introduce()

let tempFoo = userSimple7.introduce

tempFoo()

function foo(params) {
    'use strict'
    console.log(this);
}

foo()

const foo1 = function() {
    console.log('this foo1', this);
}

function foo2() {
    console.log('this foo2', this);
}

const foo3 = () => {
    console.log('this foo3', this);
}

foo1()
foo2()
foo3()

const userSimple8 = {
    objectName: 'userSimple8',
    name: 'Nick',
    profession: 'Back-End',
    introduce() {
        const foo = function() {
            console.log('foo', this);
        }
        foo()

        const foo2 = () => {
            console.log('foo2', this);
        }

        foo2()

        console.log('arrow', this);
        console.log(`Hello from ${this.objectName}!
                My name is ${this.name} and I am a ${this.profession}`);

    }
}

userSimple8.introduce()