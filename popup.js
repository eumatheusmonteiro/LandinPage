// Popup de prova social
// Aparece automaticamente a cada 10 segundos e some após 5 segundos.

const socialPopup = {
  containerId: "social-popup",
  messages: [
    "🎉 Novo pedido realizado agora.",
    "🎉 Mais um cliente garantiu seu kit.",
    "🎉 Download liberado para um novo cliente.",
    "🎉 Cliente finalizou uma compra agora.",
    "🎉 Mais um kit vendido.",
  ],
  lastIndex: -1,
  showDelay: 10000,
  visibleDuration: 5000,
  intervalDelay: 10000,
};

function buildPopup() {
  const popup = document.createElement("div");
  popup.id = socialPopup.containerId;
  popup.setAttribute("aria-live", "polite");
  popup.innerHTML = `
    <div class="social-popup__card">
      <span class="social-popup__icon">✔️</span>
      <span class="social-popup__message"></span>
    </div>
  `;
  document.body.appendChild(popup);
  return popup;
}

function randomMessage() {
  const count = socialPopup.messages.length;
  if (count === 0) return "🎉 Novo pedido realizado agora.";

  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * count);
  } while (nextIndex === socialPopup.lastIndex && count > 1);

  socialPopup.lastIndex = nextIndex;
  return socialPopup.messages[nextIndex];
}

function showSocialPopup() {
  const popup = document.getElementById(socialPopup.containerId) || buildPopup();
  const messageEl = popup.querySelector(".social-popup__message");
  if (!messageEl) return;

  messageEl.textContent = randomMessage();
  popup.classList.add("visible");

  setTimeout(() => {
    popup.classList.remove("visible");
  }, socialPopup.visibleDuration);
}

function startSocialPopupCycle() {
  showSocialPopup();
  setInterval(showSocialPopup, socialPopup.intervalDelay);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(startSocialPopupCycle, socialPopup.showDelay);
  });
} else {
  setTimeout(startSocialPopupCycle, socialPopup.showDelay);
}
