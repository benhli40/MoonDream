// clock.js

export function startClock() {
  updateTime(); // Run once immediately
  setInterval(updateTime, 1000); // Then update every second
}

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = formatNumber(now.getMinutes());
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12; // convert to 12-hour
  const timeString = `${hours}:${minutes} ${ampm}`;

  const clock = document.getElementById('live-time');
  clock.textContent = timeString;

  clock.classList.remove('glow');
  void clock.offsetWidth;
  clock.classList.add('glow');
}

function formatNumber(num) {
  return num < 10 ? '0' + num : num;
}