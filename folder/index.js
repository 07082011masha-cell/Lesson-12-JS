console.log("1 task");


const user1 = {
    name: "Ivan",
    age: 20,
    hobby: "football",
    premium: true
};

user1.mood = "happy";
user1.hobby = "skydiving";
user1.premium = false;

let keys = Object.keys(user1);

for (let key of keys) {
    console.log(key + ": " + user1[key]);
}

// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of


console.log("2 task");

function countProps(obj) {
    return Object.keys(obj).length;
}

const user2 = {
    name: "Ivan",
    age: 20,
    city: "Kyiv"
};

console.log(countProps(user2));

// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.



console.log("3 task");

function findBestEmployee(employees) {
    let bestEmployee = "";
    let maxTasks = 0;

    for (let name in employees) {
        if (employees[name] > maxTasks) {
            maxTasks = employees[name];
            bestEmployee = name;
        }
    }

    return bestEmployee;
}

const employees = {
    Ivan: 10,
    Petro: 15,
    Oleg: 8
};

console.log(findBestEmployee(employees));


// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".



console.log("4 task");

function countTotalSalary(employees) {
    let total = 0;

    for (let name in employees) {
        total = total + employees[name];
    }

    return total;
}

const employees2 = {
    Ivan: 1000,
    Petro: 2000,
    Oleg: 1500
};

console.log(countTotalSalary(employees2));


// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".


console.log("5 task");

function getAllPropValues(arr, prop) {
    let values = [];

    for (let item of arr) {
        if (item[prop] !== undefined) {
            values.push(item[prop]);
        }
    }

    return values;
}

const products = [
    { name: "Apple", price: 20 },
    { name: "Banana", price: 30 },
    { name: "Orange", price: 40 }
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));

// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.



console.log("6 task");

function calculateTotalPrice(allProducts, productName) {
    let total = 0;

    for (let product of allProducts) {
        if (product.name == productName) {
            total = total + product.price * product.quantity;
        }
    }

    return total;
}

const allProducts = [
    { name: "Apple", price: 20, quantity: 3 },
    { name: "Banana", price: 30, quantity: 2 },
    { name: "Apple", price: 20, quantity: 2 }
];

console.log(calculateTotalPrice(allProducts, "Apple"));
console.log(calculateTotalPrice(allProducts, "Banana"));

// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.



