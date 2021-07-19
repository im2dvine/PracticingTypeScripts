let myName = "Daesy";

const numOfStates = 50;

let result = 5 + 4;



function sayHello() {
    alert("Hello World!");
}

sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);



let myFavoriteVegetables = ["Avocado", "Peppers", "Mushrooms", "Pickles", "Broccoli", "Spinach"];

for (let i = 0; i < myFavoriteVegetables.length; i++) {
    console.log(myFavoriteVegetables[i]);
}


let pet = {
    name: "Bruno",
    breed: "Cat"
};

console.log(pet.name, pet.breed);


let humans = [
    { 
        name: "Daze",
        age: 29
    },
    {
        name: "Rico",
        age: 25
    },
    { 
        name: "Kayla",
        age: 29
    },
    {
        name: "Javi",
        age: 20
    },
    {
        name: "Yari",
        age: 20
    }
];

for (let i = 0; i < humans.length; i++) {
    checkAge(humans[i].name, humans[i].age);
}



function getLength(str) {
    return str.length;
}


let numberResult = getLength("Hello World");
if(numberResult % 2 == 0) {
    console.log("The world is nice and even!")
} else {
    console.log("The world is an odd place!")
};