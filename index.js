// Your code here

let Cat = class {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
        this.speak = function() {
            return `${this.name} says meow!`
        }
    }
}

let Dog = class {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
        this.speak = function() {
            return `${this.name} says woof!`
        }
    }
}

let Bird = class {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
        this.speak = function () {
            if (this.sex === "male") {
                return `It's me! ${this.name}, the parrot!`
            } else {
                return `${this.name} says squawk!`
            }
        }
    }
}
