// theme.js

export function applyTimeBasedTheme() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 6 && hour < 18) {
    setDayTheme();
  } else {
    setNightTheme();
  }
}

function setDayTheme() {
  document.body.classList.remove('night');
  document.body.classList.add('day');
}

function setNightTheme() {
  document.body.classList.remove('day');
  document.body.classList.add('night');
}

export function updateMoonPhase() {
  const moonVisual = document.getElementById('moon-visual');
  const phase = getMoonPhase();

  const phaseIcons = {
    'New Moon': '🌑',
    'Waxing Crescent': '🌒',
    'First Quarter': '🌓',
    'Waxing Gibbous': '🌔',
    'Full Moon': '🌕',
    'Waning Gibbous': '🌖',
    'Last Quarter': '🌗',
    'Waning Crescent': '🌘'
  };

  const icon = phaseIcons[phase.name] || '🌑';

  moonVisual.setAttribute('data-phase', phase.name);
  moonVisual.innerHTML = `
    <div class="moon-phase-display">
      <div class="moon-icon">${icon}</div>
      <p class="moon-name">${phase.name}</p>
    </div>
  `;
}

// Moon phase calculator
function getMoonPhase() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  // Meeus/Jenkinson approximation
  const c = Math.floor((year * 365.25) + (month * 30.6) + day - 694039.09);
  const e = c / 29.5305882;
  const b = Math.floor(e);
  const phaseDay = Math.round((e - b) * 29);

  const phaseNames = [
    'New Moon', 'Waxing Crescent', 'First Quarter', 'Waxing Gibbous',
    'Full Moon', 'Waning Gibbous', 'Last Quarter', 'Waning Crescent'
  ];

  const phaseIndex = Math.floor((phaseDay / 29) * 8);
  const phaseName = phaseNames[phaseIndex % 8];

  return {
    name: phaseName,
    day: phaseDay
  };
}