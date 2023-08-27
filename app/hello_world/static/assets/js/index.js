'use strict';
import {
  annoyingSpinner,
  stopSpinner,
} from './modules/spinner/annoyingSpinner.js';

annoyingSpinner(5000);
document.getElementById('stopButton').addEventListener('click', stopSpinner);
document.querySelector('#startSpinner').addEventListener('click', () => {
  stopSpinner();
  annoyingSpinner();
});