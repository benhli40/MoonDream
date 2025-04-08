// app.js

import { startClock } from './clock.js';
import { calculateSleepTimes } from './sleepCalc.js';
import { displaySleepTimes } from './plannerUI.js';
import { applyTimeBasedTheme, updateMoonPhase } from './theme.js';

document.addEventListener('DOMContentLoaded', () => {
  startClock();
  applyTimeBasedTheme();
  updateMoonPhase(); 

  const button = document.getElementById('calculate-sleep');
  button.addEventListener('click', () => {
    const input = document.getElementById('wake-time').value;
    if (!input) {
      alert('Please select a wake-up time.');
      return;
    }

    const [hour, minute] = input.split(':').map(Number);
    const wakeTime = new Date();
    wakeTime.setHours(hour, minute, 0, 0);

    const sleepTimes = calculateSleepTimes(wakeTime);
    displaySleepTimes(sleepTimes, wakeTime);
  });
});