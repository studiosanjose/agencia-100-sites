/**
 * DRA. SOFIA MORAES | DERMATOLOGIA & ESTÉTICA MÉDICA AVANÇADA
 * Interactive Logic, Split Slider, Quiz Wizard & WhatsApp Automation
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initSplitSlider();
  initTabs();
  initQuizWizard();
  initCountUp();
  initFaqAccordion();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. Header Scroll Effect
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* --------------------------------------------------------------------------
   2. Mobile Menu Toggle
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-active');
    const icon = toggleBtn.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    }
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-active');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. Interactive Split Slider (Before / After)
   -------------------------------------------------------------------------- */
function initSplitSlider() {
  const container = document.querySelector('.split-slider-container');
  const beforeWrap = document.querySelector('.slider-before-wrap');
  const handle = document.querySelector('.slider-handle');

  if (!container || !beforeWrap || !handle) return;

  let isDragging = false;

  function updateSliderPosition(clientX) {
    const rect = container.getBoundingClientRect();
    let position = ((clientX - rect.left) / rect.width) * 100;

    // Constrain position between 5% and 95%
    if (position < 5) position = 5;
    if (position > 95) position = 95;

    beforeWrap.style.width = `${position}%`;
    handle.style.left = `${position}%`;
  }

  // Mouse Events
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Events
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

/* --------------------------------------------------------------------------
   4. Procedure Tabs Switcher
   -------------------------------------------------------------------------- */
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      // Update Active Buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update Active Panes
      tabPanes.forEach(pane => {
        if (pane.id === targetId) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. Aesthetic Diagnostic Quiz Wizard (3 Steps)
   -------------------------------------------------------------------------- */
function initQuizWizard() {
  const quizSteps = document.querySelectorAll('.quiz-step');
  const stepIndicators = document.querySelectorAll('.quiz-step-indicator');
  const progressFill = document.querySelector('.quiz-progress-fill');
  
  if (!quizSteps.length) return;

  let currentStep = 1;
  const quizData = {
    prioridade: '',
    faixaEtaria: '',
    procedimentoAnterior: '',
    nome: '',
    telefone: ''
  };

  // Option selection logic in Step 1 & 2
  document.querySelectorAll('.quiz-option-card').forEach(card => {
    card.addEventListener('click', () => {
      const parentStep = card.closest('.quiz-step');
      const stepNum = parentStep.getAttribute('data-step');
      const field = card.getAttribute('data-field');
      const value = card.getAttribute('data-value');

      // Deselect siblings in the same group
      parentStep.querySelectorAll(`.quiz-option-card[data-field="${field}"]`).forEach(c => {
        c.classList.remove('selected');
      });

      card.classList.add('selected');
      quizData[field] = value;
    });
  });

  // Next Buttons
  document.querySelectorAll('.btn-next-step').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep === 1 && !quizData.prioridade) {
        alert('Por favor, selecione sua principal prioridade para continuar.');
        return;
      }
      if (currentStep === 2 && !quizData.faixaEtaria) {
        alert('Por favor, selecione sua faixa etária para continuar.');
        return;
      }

      if (currentStep < 3) {
        goToStep(currentStep + 1);
      }
    });
  });

  // Prev Buttons
  document.querySelectorAll('.btn-prev-step').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) {
        goToStep(currentStep - 1);
      }
    });
  });

  function goToStep(step) {
    currentStep = step;

    // Update Steps Visibility
    quizSteps.forEach(s => {
      if (parseInt(s.getAttribute('data-step')) === currentStep) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });

    // Update Step Indicators
    stepIndicators.forEach((ind, idx) => {
      const stepIdx = idx + 1;
      ind.classList.remove('active', 'done');
      if (stepIdx === currentStep) {
        ind.classList.add('active');
      } else if (stepIdx < currentStep) {
        ind.classList.add('done');
      }
    });

    // Update Progress Fill
    if (progressFill) {
      progressFill.style.width = `${(currentStep / 3) * 100}%`;
    }
  }

  // Final Submit Handler
  const quizForm = document.getElementById('quiz-final-form');
  if (quizForm) {
    quizForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = document.getElementById('quiz-nome').value.trim();
      const telefone = document.getElementById('quiz-telefone').value.trim();

      if (!nome || !telefone) {
        alert('Por favor, preencha seu nome e WhatsApp.');
        return;
      }

      quizData.nome = nome;
      quizData.telefone = telefone;

      // Construct WhatsApp message
      const phoneClinic = '5511994009450';
      const msg = `Olá, Dra. Sofia Moraes! ✨\n\nAcabei de realizar meu *Diagnóstico Estético Exclusivo* no site e gostaria de agendar uma consulta:\n\n` +
        `👤 *Nome:* ${quizData.nome}\n` +
        `📱 *WhatsApp:* ${quizData.telefone}\n` +
        `🎯 *Principal Queixa/Foco:* ${quizData.prioridade || 'Harmonização & Rejuvenescimento'}\n` +
        `⏳ *Faixa Etária:* ${quizData.faixaEtaria || 'Não informada'}\n` +
        `💉 *Já realizou procedimentos antes:* ${quizData.procedimentoAnterior || 'Primeira vez'}\n\n` +
        `Gostaria de verificar a disponibilidade de horários para este mês!`;

      const whatsappUrl = `https://wa.me/${phoneClinic}?text=${encodeURIComponent(msg)}`;
      window.open(whatsappUrl, '_blank');
    });
  }
}

/* --------------------------------------------------------------------------
   6. Animated Metric Counters
   -------------------------------------------------------------------------- */
function initCountUp() {
  const metricNumbers = document.querySelectorAll('.metric-number[data-target]');
  if (!metricNumbers.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        metricNumbers.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'));
          const prefix = counter.getAttribute('data-prefix') || '';
          const suffix = counter.getAttribute('data-suffix') || '';
          const duration = 2000;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = `${prefix}${target.toLocaleString('pt-BR')}${suffix}`;
              clearInterval(timer);
            } else {
              counter.textContent = `${prefix}${Math.floor(current).toLocaleString('pt-BR')}${suffix}`;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.querySelector('.metrics-section');
  if (metricsSection) {
    observer.observe(metricsSection);
  }
}

/* --------------------------------------------------------------------------
   7. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. Contact Form Handler (WhatsApp Direct)
   -------------------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('contact-nome').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const procedimento = document.getElementById('contact-procedimento').value;
    const mensagem = document.getElementById('contact-msg').value.trim();

    const phoneClinic = '5511994009450';
    const msg = `Olá, Dra. Sofia Moraes! ✨\n\nGostaria de agendar uma avaliação na clínica:\n\n` +
      `👤 *Nome:* ${nome}\n` +
      `📱 *Telefone:* ${phone}\n` +
      `💉 *Interesse:* ${procedimento || 'Consulta Geral de Dermatologia'}\n` +
      (mensagem ? `📝 *Mensagem:* ${mensagem}\n\n` : '\n') +
      `Aguardo o retorno para agendarmos o melhor horário!`;

    const whatsappUrl = `https://wa.me/${phoneClinic}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  });
}
