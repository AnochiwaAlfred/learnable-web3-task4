
// define class
class Human {
    // instance properties/methods
    numberOfEyes = 2
    hairColor = "black"  
    cry(){
        console.log("I am crying")
    }
    // class/static properties
    static numberOfLegs = 2
// ----------------------
    displaySelf(){
        console.log(this)
    }
    displayHairColor(){
        console.log(this.hairColor)
        this.displaySelf()
    }

    static accessStatic(){
        console.log(Human.numberOfLegs)
    }



}

// instantiate class
const human = new Human()

// updating instance properties
human.hairColor = "Brown"

// updating class properties
Human.numberOfLegs = 24
// accessing the object and class properties inside the class (this keyword)
// console.log(human)
// human.displaySelf()
// human.displayHairColor()
// Human.accessStatic()




// constructor methods

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    // getter
    getAge(){
        console.log(this.age)
    }
    // setter
    setAge(age){
        this.age=age
    }
}

const john = new Person("John", 12)
const joy = new Person("Joy", 45)
// console.log(john)
// john.getAge()
// john.setAge(46)
// john.getAge()


// getters and setters

