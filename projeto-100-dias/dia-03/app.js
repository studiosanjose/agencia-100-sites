/**
 * ==========================================================================
 * HELIOS ENERGY & ENGENHARIA SOLAR - INTERACTIVE APP ENGINE (DIA 03)
 * Real-time Solar Economy Calculator, Split Slider & CRO Triggers
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSolarCalculator();
  initSplitSlider();
  initFaqAccordion();
  initAnimatedCounters();
});

/* ==========================================================================
   1. NAVBAR SCROLL EFFECT & MOBILE MENU
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(6, 9, 17, 0.98)';
        navLinks.style.padding = '24px';
        navLinks.style.borderBottom = '1px solid rgba(245, 158, 11, 0.3)';
      }
    });
  }
}

/* ==========================================================================
   2. CALCULADORA DE ECONOMIA SOLAR EM TEMPO REAL
   ========================================================================== */
function initSolarCalculator() {
  const rangeInput = document.getElementById('billRange');
  const billDisplay = document.getElementById('billValueDisplay');
  const monthlyEconomyEl = document.getElementById('monthlyEconomy');
  const annualEconomyEl = document.getElementById('annualEconomy');
  const economy25El = document.getElementById('economy25Years');
  const powerKwpEl = document.getElementById('estimatedPower');
  const co2El = document.getElementById('co2Saved');
  const treesEl = document.getElementById('treesSaved');
  const whatsappBtn = document.getElementById('calcWhatsappBtn');
  const modalidadeBtns = document.querySelectorAll('.modalidade-btn');

  let currentModalidade = 'Residencial';

  modalidadeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modalidadeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentModalidade = btn.dataset.type || 'Residencial';
      updateCalculations();
    });
  });

  if (!rangeInput) return;

  function formatBRL(value) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(value);
  }

  function updateCalculations() {
    const bill = parseFloat(rangeInput.value) || 1200;
    
    // Atualiza o display do slider
    if (billDisplay) {
      billDisplay.textContent = formatBRL(bill);
    }

    // Cálculos de Engenharia Fotovoltaica
    // Taxa média de redução líquida (92% a 95% considerando taxa de disponibilidade mínima)
    const reductionRate = currentModalidade === 'Industrial' ? 0.90 : 0.94;
    const monthlySavings = bill * reductionRate;
    const annualSavings = monthlySavings * 12;
    
    // Projeção em 25 anos com reajuste tarifário médio de inflação de energia (5.5% a.a.)
    const savings25Years = annualSavings * 25 * 1.32;

    // Estimativa de potência do sistema (tarifa média R$ 0,95/kWh e produtividade 135 kWh/kWp/mês)
    const estimatedKWhMonth = bill / 0.95;
    const estimatedKWp = (estimatedKWhMonth / 135).toFixed(1);

    // Métricas ecológicas (fator de emissão médio SIN Brasil 0.085 kg CO2/kWh)
    const annualCO2Tons = ((estimatedKWhMonth * 12 * 0.085) / 1000).toFixed(1);
    const treesEquivalent = Math.round(annualCO2Tons * 7.2);

    // Atualiza os elementos na tela com transição suave
    if (monthlyEconomyEl) monthlyEconomyEl.textContent = formatBRL(monthlySavings) + ' /mês';
    if (annualEconomyEl) annualEconomyEl.textContent = formatBRL(annualSavings);
    if (economy25El) economy25El.textContent = formatBRL(savings25Years);
    if (powerKwpEl) powerKwpEl.textContent = `${estimatedKWp} kWp`;
    if (co2El) co2El.textContent = `${annualCO2Tons} ton/ano`;
    if (treesEl) treesEl.textContent = `${treesEquivalent} árvores/ano`;

    // Atualiza o link do botão de WhatsApp com a mensagem personalizada
    if (whatsappBtn) {
      const phoneNumber = '5511999998888'; // Número de demonstração da agência
      const textMsg = `Olá! Realizei uma simulação no site da Helios Energy:%0A` +
        `• *Modalidade:* ${currentModalidade}%0A` +
        `• *Conta Atual:* ${formatBRL(bill)}/mês%0A` +
        `• *Economia Estimada:* ${formatBRL(monthlySavings)}/mês (${formatBRL(savings25Years)} em 25 anos)%0A` +
        `• *Potência Estimada:* ${estimatedKWp} kWp%0A%0A` +
        `Gostaria de receber um estudo técnico de viabilidade e orçamento gratuito para o meu imóvel!`;

      whatsappBtn.href = `https://wa.me/${phoneNumber}?text=${textMsg}`;
    }
  }

  rangeInput.addEventListener('input', updateCalculations);
  updateCalculations(); // Disparo inicial
}

/* ==========================================================================
   3. SHOWCASE SPLIT SLIDER (ANTES & DEPOIS)
   ========================================================================== */
function initSplitSlider() {
  const container = document.querySelector('.split-container');
  const afterImage = document.querySelector('.split-image.after');
  const handle = document.querySelector('.split-handle');

  if (!container || !afterImage || !handle) return;

  let isDragging = false;

  function setSliderPosition(x) {
    const rect = container.getBoundingClientRect();
    let position = ((x - rect.left) / rect.width) * 100;

    // Limites de segurança entre 5% e 95%
    if (position < 5) position = 5;
    if (position > 95) position = 95;

    handle.style.left = `${position}%`;
    afterImage.style.clipPath = `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`;
  }

  // Eventos de Mouse
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    setSliderPosition(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    setSliderPosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Eventos Touch (Mobile)
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    if (e.touches.length > 0) {
      setSliderPosition(e.touches[0].clientX);
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      setSliderPosition(e.touches[0].clientX);
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

/* ==========================================================================
   4. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Fecha todos os outros
        faqItems.forEach(other => {
          if (other !== item) other.classList.remove('active');
        });

        // Alterna o atual
        item.classList.toggle('active', !isActive);
      });
    }
  });
}

/* ==========================================================================
   5. CONTADORES NUMÉRICOS ANIMADOS (COUNT-UP NA ROLAGEM)
   ========================================================================== */
function initAnimatedCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');

  if (!('IntersectionObserver' in window)) {
    counters.forEach(c => c.textContent = c.getAttribute('data-target'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetNumber = parseInt(target.getAttribute('data-target'), 10);
        const prefix = target.getAttribute('data-prefix') || '';
        const suffix = target.getAttribute('data-suffix') || '';
        const duration = 2000;
        const stepTime = 25;
        const totalSteps = duration / stepTime;
        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          const progress = currentStep / totalSteps;
          const currentVal = Math.round(targetNumber * Math.min(progress, 1));
          
          target.textContent = `${prefix}${currentVal.toLocaleString('pt-BR')}${suffix}`;

          if (currentStep >= totalSteps) {
            clearInterval(timer);
            target.textContent = `${prefix}${targetNumber.toLocaleString('pt-BR')}${suffix}`;
          }
        }, stepTime);

        obs.unobserve(target);
      }
    });
  }, { threshold: 0.2 });

  counters.forEach(counter => observer.observe(counter));
}
