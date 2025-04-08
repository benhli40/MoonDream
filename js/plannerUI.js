// plannerUI.js

export function displaySleepTimes(times, wakeTime) {
  const container = document.getElementById('sleep-results');
  container.innerHTML = '';

  const formattedWakeTime = formatTime(wakeTime);
  const heading = document.createElement('h3');
  heading.textContent = `To wake up at ${formattedWakeTime}, try falling asleep at:`;
  container.appendChild(heading);

  const list = document.createElement('ul');
  list.classList.add('sleep-time-list');

  times.forEach(({ time, cycles }) => {
    const item = document.createElement('li');
    item.innerHTML = `<strong>${time}</strong> <span class="cycle-note">(${cycles} cycles)</span>`;
    list.appendChild(item);
  });

  container.appendChild(list);
}

function formatTime(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;
  const paddedMinutes = minutes < 10 ? '0' + minutes : minutes;

  return `${hours}:${paddedMinutes} ${ampm}`;
}