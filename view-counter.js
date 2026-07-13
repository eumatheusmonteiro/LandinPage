// Componente de contador de visualizações.
// Mostra um número natural entre 8 e 25 e atualiza a cada 20 segundos.

const viewCounter = {
  min: 8,
  max: 25,
  intervalMs: 20000,
  currentValue: 18,
  elementId: "view-counter",
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getNextViewCount(current) {
  const maxDelta = 3;
  const deltaOptions = [-3, -2, -1, 1, 2, 3];
  let next = current;
  let attempts = 0;

  while ((next === current || next < viewCounter.min || next > viewCounter.max) && attempts < 10) {
    const delta = deltaOptions[Math.floor(Math.random() * deltaOptions.length)];
    next = clamp(current + delta, viewCounter.min, viewCounter.max);
    attempts += 1;
  }

  if (next === current) {
    next = clamp(current + 1, viewCounter.min, viewCounter.max);
  }

  return next;
}

function updateViewCounterValue() {
  const counter = document.getElementById(viewCounter.elementId);
  if (!counter) return;

  const numberEl = counter.querySelector(".view-counter__value");
  if (!numberEl) return;

  const nextValue = getNextViewCount(viewCounter.currentValue);
  viewCounter.currentValue = nextValue;

  numberEl.classList.add("animate");
  numberEl.textContent = nextValue;

  window.setTimeout(() => {
    numberEl.classList.remove("animate");
  }, 250);
}

function initViewCounter() {
  const counter = document.getElementById(viewCounter.elementId);
  if (!counter) return;

  const numberEl = counter.querySelector(".view-counter__value");
  if (numberEl) {
    numberEl.textContent = viewCounter.currentValue;
  }

  setInterval(updateViewCounterValue, viewCounter.intervalMs);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initViewCounter);
} else {
  initViewCounter();
}
