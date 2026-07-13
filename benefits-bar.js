// Benefits bar fixa no topo da landing page.
// Ajusta o espaçamento do conteúdo para não esconder nada.

function createBenefitsBar() {
  const bar = document.createElement("div");
  bar.id = "benefits-bar";
  bar.className = "benefits-bar";
  bar.innerHTML = `
    <div class="benefits-bar__inner">
      <span class="benefits-bar__item"><span class="benefits-bar__icon">🚀</span><span>Download imediato</span></span>
      <span class="benefits-bar__item"><span class="benefits-bar__icon">🔒</span><span>Compra 100% segura</span></span>
      <span class="benefits-bar__item"><span class="benefits-bar__icon">⭐</span><span>Arquivos em alta qualidade</span></span>
      <span class="benefits-bar__item"><span class="benefits-bar__icon">💬</span><span>Suporte via WhatsApp</span></span>
    </div>
  `;

  document.body.prepend(bar);
  return bar;
}

function updateBenefitsBarSpacing(benefitsBar) {
  if (!benefitsBar) return;

  const topBar = document.querySelector(".top-bar");
  const topOffset = topBar ? topBar.offsetHeight : 0;
  const barHeight = benefitsBar.offsetHeight;
  const totalOffset = topOffset + barHeight;

  benefitsBar.style.top = `${topOffset}px`;
  document.body.style.paddingTop = `${totalOffset}px`;
}

function initBenefitsBar() {
  const benefitsBar = createBenefitsBar();

  // Atualiza o espaçamento antes da animação para evitar branco no topo.
  updateBenefitsBarSpacing(benefitsBar);
  requestAnimationFrame(() => {
    benefitsBar.classList.add("visible");
  });

  window.addEventListener("resize", () => updateBenefitsBarSpacing(benefitsBar));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initBenefitsBar);
} else {
  initBenefitsBar();
}
