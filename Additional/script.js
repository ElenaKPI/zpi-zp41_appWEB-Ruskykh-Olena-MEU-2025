// Завдання1
function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

function showShippingMessage() {
    const message = getShippingMessage("Ukraine", 100, 20);
    console.log(message);
}


// Завдання2
function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = quantity * pricePerDroid;

    if (totalPrice > customerCredits) {
        return "Insufficient funds!";
    } else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
}

function makeSuccessTransaction() {
    console.log(makeTransaction(5, 300, 2000));
}

function makeFailTransaction() {
    console.log(makeTransaction(10, 500, 4000));
}

// Завдання3
function makeArray(firstArray, secondArray, maxLength) {
    const combinedArray = [...firstArray, ...secondArray];

    if (combinedArray.length > maxLength) {
        return combinedArray.slice(0, maxLength); 
    }

    return combinedArray; 
}

function makeArrayFull() {
    console.log(makeArray([1, 2], [3, 4, 5], 10)); 
}

function makeArraySlice() {
    console.log(makeArray([1, 2, 3], [4, 5, 6], 4)); 
}

// Завдання4
function generateRandomArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 100)); 
    }
    return array;
}

function moveMinToStart(array) {
    const minIndex = array.indexOf(Math.min(...array));
    const minValue = array[minIndex];

    for (let i = minIndex; i > 0; i--) {
        array[i] = array[i - 1];
    }

    array[0] = minValue;
    return array;
}

function selectionSortDescending(array) {
    const sortedArray = [...array]; 

    for (let i = 0; i < sortedArray.length - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < sortedArray.length; j++) {
            if (sortedArray[j] > sortedArray[maxIndex]) {
                maxIndex = j;
            }
        }
        [sortedArray[i], sortedArray[maxIndex]] = [sortedArray[maxIndex], sortedArray[i]];
    }

    return sortedArray;
}

// const size = parseInt(prompt("Введіть кількість елементів у масиві: "), 10);
// const randomArray = generateRandomArray(size);

// console.log("Генерований масив:", randomArray);

// const updatedArray = moveMinToStart(randomArray);
// console.log("Масив з мінімальним елементом на початку:", updatedArray);

// const sortedArray = selectionSortDescending(updatedArray);
// console.log("Відсортований масив у порядку зменшення:", sortedArray);

// Завдання5
document.addEventListener("DOMContentLoaded", () => {
    const contextMenu = document.getElementById("custom-context-menu");
    const tooltipInput = document.getElementById("tooltip-input");
    const addTooltipBtn = document.getElementById("add-tooltip-btn");
    let selectedText = "";
    let range = null;

    // Відображення контекстного меню
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault(); //відміняє стандартне контекстне меню

        const selection = window.getSelection();
        if (selection && selection.toString().trim().length > 0) {
            selectedText = selection.toString();
            range = selection.getRangeAt(0); // зберігає обєкт Range, що вказує на місце виділення в документі

            contextMenu.style.top = `${event.pageY}px`; // позиціонування контекстоного меню
            contextMenu.style.left = `${event.pageX}px`;
            contextMenu.classList.remove("hidden"); // стає видимим
            contextMenu.style.display = "block";
        } else {
            contextMenu.classList.add("hidden");
        }
    });

    // Додавання підказки до виділеного тексту
    addTooltipBtn.addEventListener("click", () => {
        const tooltipText = tooltipInput.value.trim();
        if (tooltipText && range) {
            const span = document.createElement("span");
            span.className = "tooltip";
            span.setAttribute("data-tooltip", tooltipText);
            span.textContent = selectedText;

            range.deleteContents();
            range.insertNode(span);

            tooltipInput.value = "";
            contextMenu.classList.add("hidden");
        } else {
            alert("Будь ласка, введіть текст підказки.");
        }
    });

    // Сховати контекстне меню при кліку поза ним
    document.addEventListener("click", (event) => {
        if (!contextMenu.contains(event.target)) {
            contextMenu.classList.add("hidden");
            contextMenu.style.display = "none";
        }
    });
});
