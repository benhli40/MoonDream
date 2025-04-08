// sleepCalc.js

export function calculateSleepTimes(wakeTime) {
  const cycleMinutes = 90;
  const fallAsleepBuffer = 15; // typical time to fall asleep
  const results = [];

  const wake = new Date(wakeTime.getTime());

  // Start with 6 cycles (ideal) and go down to 2 (minimum)
  for (let cycles = 6; cycles >= 2; cycles--) {
    const totalMinutes = cycles * cycleMinutes + fallAsleepBuffer;
    const sleepTime = new Date(wake.getTime() - totalMinutes * 60000);
    results.push({
      cycles,
      time: formatTime(sleepTime),
    });
  }

  return results;
}

function formatTime(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12; // 12-hour format
  const paddedMinutes = minutes < 10 ? '0' + minutes : minutes;

  return `${hours}:${paddedMinutes} ${ampm}`;
}