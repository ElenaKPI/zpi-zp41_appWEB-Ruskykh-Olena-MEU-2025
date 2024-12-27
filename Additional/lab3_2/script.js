// Створення бази даних 
const productsDatabase = [
    { id: 1, name: "Apple", price: 100 },
    { id: 2, name: "Pineapple", price: 700 },
    { id: 3, name: "Banana", price: 50 },
];

function getProductDetails(productId, successCallback, errorCallback) {
    // Пошук товару в базі даних
    const product = productsDatabase.find((item) => item.id === productId);

    if (product) {
        successCallback(product);
    } else {
        errorCallback(`Product with ID ${productId} not found.`);
    }
}

function handleSuccess(product) {
    console.log("Product details:", product);
}

function handleError(errorMessage) {
    console.error("Error:", errorMessage);
}

// Виклик функції для існуючого товару
getProductDetails(2, handleSuccess, handleError);

// Виклик функції для неіснуючого товару
getProductDetails(5, handleSuccess, handleError);

//Завдання 4
const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

// Отримати масив міст, де концерти ще не пройшли, і відсортувати за датою
const result = Object.entries(concerts)
    .filter(([city, date]) => date > new Date())
    .sort((a, b) => a[1] - b[1]) 
    .map(([city]) => city); 

console.log(result);

//Завдання 6
const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];

const applyDiscountAndAddId = (medicines) => {
    return medicines.map((medicine, index) => {
        let discountedPrice = medicine.price;

        // Застосовуємо знижку 30%, якщо ціна більше 300
        if (medicine.price > 300) {
            discountedPrice = (medicine.price * 0.7).toFixed(2); // Округлюємо до 2 десяткових
        }

        return {
            id: index + 1, 
            name: medicine.name,
            originalPrice: medicine.price,
            price: discountedPrice,
        };
    });
};

const updatedMedicines = applyDiscountAndAddId(medicines);
console.log(updatedMedicines);

//Завдання 8

// Функція-конструктор Storage
function Storage(items) {
    this.items = items; // Початковий масив товарів

    // Метод для отримання масиву товарів
    this.getItems = function () {
        return this.items;
    };

    // Метод для додавання нового товару
    this.addItem = function (item) {
        this.items.push(item);
    };

    // Метод для видалення товару
    this.removeItem = function (item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
}

// Створення об'єкта Storage
const arr = ["apple", "banana", "mango"];
const storage = new Storage(arr);

// Використання методів
console.log(storage.getItems()); 

storage.addItem("orange");
console.log(storage.getItems()); 

storage.removeItem("banana");
console.log(storage.getItems()); 


//Завдання 9
const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Функція для підрахунку тегів
const countTags = (tweets) => {
    return tweets
        .flatMap(tweet => tweet.tags) // Розгортання всіх тегів в один масив
        .reduce((acc, tag) => {
            acc[tag] = (acc[tag] || 0) + 1; // Збільшуємо кількість для кожного тегу
            return acc;
        }, {});
};

const tagCounts = countTags(tweets);
console.log(tagCounts); 


//Завдання 10
function checkBrackets(str) {
    const stack = []; // Стек для відстеження відкритих дужок
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (const char of str) {
        // Якщо символ є відкритою дужкою, додаємо його в стек
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
        } else if ([')', '}', ']'].includes(char)) {
            // Якщо символ є закритою дужкою, перевіряємо стек
            if (stack.pop() !== brackets[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

// Приклади виклику функції
console.log(checkBrackets("(someFn)"));
console.log(checkBrackets("{[()]}")); 
console.log(checkBrackets("{[(])}")); 
console.log(checkBrackets("{[}")); 
