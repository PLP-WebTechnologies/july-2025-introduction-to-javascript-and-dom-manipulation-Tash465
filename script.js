// =======================
// Part 1: Variables & Conditionals
// =======================

// Get references to DOM elements for Part 1
const ageInput = document.getElementById('ageInput');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageResult = document.getElementById('ageResult');

// Event listener to check age and display message
checkAgeBtn.addEventListener('click', () => {
  // Variable declaration and input capture
  const age = Number(ageInput.value);

  // Conditional logic to determine message
  if (isNaN(age) || age < 0) {
    ageResult.textContent = 'Please enter a valid non-negative age.';
  } else if (age < 18) {
    ageResult.textContent = 'You are a minor.';
  } else if (age < 65) {
    ageResult.textContent = 'You are an adult.';
  } else {
    ageResult.textContent = 'You are a senior citizen.';
  }
});

// =======================
// Part 2: Functions
// =======================

// Get references for Part 2
const priceInput = document.getElementById('priceInput');
const quantityInput = document.getElementById('quantityInput');
const calculateTotalBtn = document.getElementById('calculateTotalBtn');
const totalResult = document.getElementById('totalResult');

/**
 * Calculates total price given price and quantity
 * @param {number} price - price per item
 * @param {number} quantity - number of items
 * @returns {number} total cost
 */
function calculateTotal(price, quantity) {
  return price * quantity;
}

/**
 * Formats a number as currency string
 * @param {number} amount
 * @returns {string} formatted currency
 */
function formatCurrency(amount) {
  return '$' + amount.toFixed(2);
}

calculateTotalBtn.addEventListener('click', () => {
  const price = Number(priceInput.value);
  const quantity = Number(quantityInput.value);

  if (isNaN(price) || price < 0 || isNaN(quantity) || quantity < 0) {
    totalResult.textContent = 'Please enter valid non-negative numbers for price and quantity.';
    return;
  }

  // Use functions to calculate and format total
  const total = calculateTotal(price, quantity);
  totalResult.textContent = `Total cost: ${formatCurrency(total)}`;
});

// =======================
// Part 3: Loops
// =======================

// Get references for Part 3
const showColorsBtn = document.getElementById('showColorsBtn');
const colorsList = document.getElementById('colorsList');

const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange'];

// Using a for loop to generate list items
function displayColors() {
  colorsList.innerHTML = ''; // Clear previous list

  for (let i = 0; i < colors.length; i++) {
    const li = document.createElement('li');
    li.textContent = colors[i];
    colorsList.appendChild(li);
  }
}

// Using forEach loop to log colors to console (demonstration)
function logColors() {
  colors.forEach(color => {
    console.log('Color:', color);
  });
}

showColorsBtn.addEventListener('click', () => {
  displayColors();
  logColors();
});

// =======================
// Part 4: DOM Manipulation
// =======================

// Get references for Part 4
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const themeStatus = document.getElementById('themeStatus');
const addItemBtn = document.getElementById('addItemBtn');
const dynamicList = document.getElementById('dynamicList');
const countdownBtn = document.getElementById('countdownBtn');
const countdownDisplay = document.getElementById('countdownDisplay');

let darkTheme = false;

// Toggle dark/light theme by adding/removing a class on body
toggleThemeBtn.addEventListener('click', () => {
  darkTheme = !darkTheme;
  if (darkTheme) {
    document.body.classList.add('dark-theme');
    themeStatus.textContent = 'Current theme: Dark';
  } else {
    document.body.classList.remove('dark-theme');
    themeStatus.textContent = 'Current theme: Light';
  }
});

// Add new list item dynamically
let itemCount = 0;
addItemBtn.addEventListener('click', () => {
  itemCount++;
  const li = document.createElement('li');
  li.textContent = `Dynamic Item ${itemCount}`;
  dynamicList.appendChild(li);
});

// Countdown using a while loop and setInterval for animation
countdownBtn.addEventListener('click', () => {
  let count = 10;
  countdownDisplay.textContent = `Countdown: ${count}`;

  const intervalId = setInterval(() => {
    count--;
    if (count >= 0) {
      countdownDisplay.textContent = `Countdown: ${count}`;
    } else {
      countdownDisplay.textContent = 'Countdown finished!';
      clearInterval(intervalId);
    }
  }, 1000);
});
