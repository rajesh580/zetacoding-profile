// Lightweight Web Audio API sound synthesizer - zero external audio files
// Generates audible, crisp, elegant, futuristic UI click and chime sounds with boosted volume

let audioCtx = null;
let soundEnabled = true;

// Initialize state from localStorage if available, defaulting to enabled (true)
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('zetacoding_sound_fx');
  if (saved !== null) {
    soundEnabled = saved === 'true';
  } else {
    soundEnabled = true;
    try {
      localStorage.setItem('zetacoding_sound_fx', 'true');
    } catch (e) {}
  }
}

// Initialize and resume AudioContext on user interaction
function getAudioContext() {
  if (!audioCtx && typeof window !== 'undefined') {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export const toggleSound = () => {
  soundEnabled = !soundEnabled;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('zetacoding_sound_fx', soundEnabled ? 'true' : 'false');
    } catch (e) {}
  }
  if (soundEnabled) {
    playCyberChime();
  }
  return soundEnabled;
};

export const isSoundEnabled = () => soundEnabled;

let lastSoundTime = 0;

/**
 * Play a boosted, punchy, futuristic UI click sound.
 * Features a dual-oscillator acoustic profile (body tone + crisp cyber transient)
 * that cuts clearly through mobile phone speakers and desktop audio.
 */
export const playSubtleClick = (force = false) => {
  if (!soundEnabled) return;
  const nowMs = Date.now();
  if (!force && nowMs - lastSoundTime < 70) return; // Prevent double-triggering
  lastSoundTime = nowMs;

  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // 1. Crisp high-frequency attack tick (gives the tactile "click" sensation on phones)
    const tickOsc = ctx.createOscillator();
    const tickGain = ctx.createGain();
    tickOsc.type = 'sine';
    tickOsc.frequency.setValueAtTime(1400, now);
    tickOsc.frequency.exponentialRampToValueAtTime(700, now + 0.02);

    tickGain.gain.setValueAtTime(0.18, now);
    tickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

    tickOsc.connect(tickGain);
    tickGain.connect(ctx.destination);
    tickOsc.start(now);
    tickOsc.stop(now + 0.02);

    // 2. Main resonant cyber body tone (warm, futuristic thud)
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(720, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.05);

    // Boosted volume: 0.22 (5.5x louder than original 0.04)
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.055);
  } catch (e) {
    // AudioContext blocked or unsupported
  }
};

/**
 * Ascending futuristic chime for successful toggles, modal openings, or highlights.
 */
export const playCyberChime = () => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, now);         // C5
    osc.frequency.setValueAtTime(659.25, now + 0.06);   // E5
    osc.frequency.setValueAtTime(783.99, now + 0.12);   // G5
    osc.frequency.setValueAtTime(1046.50, now + 0.18);  // C6

    // Boosted volume: 0.24 (vs original 0.05)
    gain.gain.setValueAtTime(0.24, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.38);
  } catch (e) {
    // ignore
  }
};

/**
 * Quick sweep for opening palettes or secondary actions
 */
export const playOpenPaletteSound = () => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(350, now);
    osc.frequency.exponentialRampToValueAtTime(950, now + 0.09);

    gain.gain.setValueAtTime(0.20, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  } catch (e) {
    // ignore
  }
};

/**
 * Global click listener that ensures EVERY button, link, tab, card, or interactive
 * element on the entire site produces futuristic audio feedback without needing
 * manual onClick handlers on every component.
 */
export const initGlobalSoundListener = () => {
  if (typeof window === 'undefined') return () => {};

  const handleGlobalClick = (e) => {
    // Ensure AudioContext is activated on user gesture
    getAudioContext();

    // Check if target or any parent matches clickable elements
    const clickable = e.target.closest?.(
      'button, a, input[type="button"], input[type="submit"], [role="button"], .cursor-pointer, select, summary'
    );

    if (clickable) {
      playSubtleClick();
    }
  };

  // Attach in capture phase so it triggers even if stopPropagation is used
  document.addEventListener('click', handleGlobalClick, true);

  return () => {
    document.removeEventListener('click', handleGlobalClick, true);
  };
};
