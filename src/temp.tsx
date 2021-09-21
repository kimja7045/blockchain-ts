const personName = 'nicolas',
    age = 24,
    gender = 'male'

const sayHi = (name, age, gender?): void => {
    console.log(gender) // undefined
}

// sayHi(personName, age)
