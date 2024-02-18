'use strict';

const percentNumber = document.getElementById('percent-form');
const percentInput = document.getElementById('percent-number');
const percentBtnClear = document.getElementById('clear-percentages');
const maxNumber = document.getElementById('max-form');
const maxWeight = document.getElementById('max-weight');
const maxReps = document.getElementById('max-reps');
const maxBtnClear = document.getElementById('clear-max');

// Enter Number for Percentage Calculator
function getPercentages(e) {
  // Prevent default
  e.preventDefault();

  // Empty input and number checker
  const input = percentInput.value.trim();

  if (input === '' || isNaN(input)) {
    alert('Please enter a valid number');
    percentInput.value = '';
    return;
  }

  // Percentages
  // Tens
  percentAnswer('.forty', 0.4);
  percentAnswer('.fifty', 0.5);
  percentAnswer('.sixty', 0.6);
  percentAnswer('.seventy', 0.7);
  percentAnswer('.eighty', 0.8);
  percentAnswer('.ninety', 0.9);
  percentAnswer('.one-hundred', 1.0);

  // Fives
  percentAnswer('.forty-five', 0.45);
  percentAnswer('.fifty-five', 0.55);
  percentAnswer('.sixty-five', 0.65);
  percentAnswer('.seventy-five', 0.75);
  percentAnswer('.eighty-five', 0.85);
  percentAnswer('.ninety-five', 0.95);

  // Over One Hundred
  percentAnswer('.hundred-five', 1.05);
  percentAnswer('.hundred-ten', 1.1);
  percentAnswer('.hundred-fifteen', 1.15);
  percentAnswer('.hundred-twenty', 1.2);
}

// Class and multiplier input
function percentAnswer(c, multiplier) {
  const number = percentInput.value;

  document.querySelector(c).innerHTML = roundToFive(number * multiplier);
}

// Round to nearest five
function roundToFive(num) {
  return Math.round(num / 5) * 5;
}

// Clear Percentage form
function clearPercents(e) {
  document
    .querySelectorAll('.clear')
    .forEach((element) => (element.innerHTML = ''));

  percentInput.value = '';
}

// Enter Numbers for Max weight
function getMax(e) {
  e.preventDefault();

  // Check for an empty and valid inputs
  const weightVal = maxWeight.value.trim();
  const repsVal = maxReps.value.trim();
  const weight = parseFloat(weightVal);
  const reps = parseFloat(repsVal);
  const weightIsNaN = isNaN(weight);
  const repsIsNaN = isNaN(reps);

  if (weightVal === '' && repsVal === '') {
    alert('Please enter your weight and reps');
    return;
  }

  if (weightIsNaN || repsIsNaN) {
    if (weightVal === '' && repsVal === '') {
      alert('Please enter your weight and reps');
    } else if (weightVal === '' && repsIsNaN) {
      alert('Please enter a valid weight and your number of reps');
    } else if (weightIsNaN && repsVal === '') {
      alert('Please enter a valid weight and your number of reps');
    } else if (weightIsNaN && repsIsNaN) {
      alert('Please enter valid numbers for weight and reps');
    } else if (weightVal === '') {
      alert('Please enter your weight');
    } else if (repsVal === '') {
      alert('Please enter your number of reps');
    } else if (weightIsNaN) {
      alert('Please enter a valid weight');
    } else if (repsIsNaN) {
      alert('Please enter a valid number of reps');
    }
    maxWeight.value = '';
    maxReps.value = '';
    return;
  }

  document.querySelector('.est-max').innerHTML = (
    weight * reps * 0.0333 +
    weight
  ).toFixed(3);
}

// Clear Max Form
function clearMax(e) {
  document.querySelector('.est-max').innerHTML = '';
  maxWeight.value = '';
  maxReps.value = '';
}

// Event Listeners
percentNumber.addEventListener('submit', getPercentages);
percentBtnClear.addEventListener('click', clearPercents);
maxNumber.addEventListener('submit', getMax);
maxBtnClear.addEventListener('click', clearMax);
