/**
 * DRA. SOFIA MORAES | DERMATOLOGIA & ESTÉTICA MÉDICA AVANÇADA
 * Interactive Logic, Multi-Case Split Slider Showcase, Video Time-Lapse, Quiz Wizard & WhatsApp Automation
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initShowcaseModeSwitcher();
  initShowcaseBanner();
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
  if (!header) return;

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
   3. Showcase Mode Switcher (Slider vs Video Time-Lapse)
   -------------------------------------------------------------------------- */
function initShowcaseModeSwitcher() {
  const btnSlider = document.getElementById('btn-mode-slider');
  const btnVideo = document.getElementById('btn-mode-video');
  const viewSlider = document.getElementById('view-slider');
  const viewVideo = document.getElementById('view-video');
  const videoEl = document.getElementById('main-evolution-video');

  if (!btnSlider || !btnVideo || !viewSlider || !viewVideo) return;

  btnSlider.addEventListener('click', () => {
    btnSlider.classList.add('active');
    btnVideo.classList.remove('active');
    viewSlider.classList.add('active');
    viewVideo.classList.remove('active');
    if (videoEl) videoEl.pause();
  });

  btnVideo.addEventListener('click', () => {
    btnVideo.classList.add('active');
    btnSlider.classList.remove('active');
    viewVideo.classList.add('active');
    viewSlider.classList.remove('active');
    if (videoEl) {
      videoEl.currentTime = 0;
      videoEl.play().catch(() => {});
    }
  });
}

/* --------------------------------------------------------------------------
   4. Multi-Case Split Slider Showcase Banner (Auto-play + Manual Control)
   -------------------------------------------------------------------------- */
function initShowcaseBanner() {
  const container = document.getElementById('main-split-slider');
  const beforeWrap = document.getElementById('before-wrap');
  const handle = document.getElementById('slider-handle');
  const imgAntes = document.getElementById('img-antes');
  const imgDepois = document.getElementById('img-depois');
  
  const caseTag = document.getElementById('case-tag');
  const caseTitle = document.getElementById('case-title');
  const caseDesc = document.getElementById('case-desc');
  const caseTempo = document.getElementById('case-tempo');
  const caseWaBtn = document.getElementById('case-whatsapp-btn');
  const navBtns = document.querySelectorAll('.case-nav-btn');

  if (!container || !beforeWrap || !handle || !imgAntes || !imgDepois) return;

  // Case Data Registry
  const casesData = {
    1: {
      tag: 'Caso Clínico nº 01 • Paciente 42 anos',
      title: 'Bioestimulação de Colágeno & Contorno Mandibular',
      desc: 'Queixa de perda de sustentação dérmica e linhas de cansaço. Tratamento realizado com aplicação em vetor de sustentação de Hidroxiapatita de Cálcio (Radiesse) e compactação dérmica com Ultraformer MPT.',
      tempo: '60 dias após 1ª sessão',
      imgAntes: 'assets/resultado-antes.jpg',
      imgDepois: 'assets/resultado-depois.jpg',
      waText: 'Olá, Dra. Sofia! Gostaria de avaliar um protocolo semelhante ao Caso 01 (Firmeza & Contorno Mandibular).'
    },
    2: {
      tag: 'Caso Clínico nº 02 • Paciente 38 anos',
      title: 'Rejuvenescimento do Olhar & Suavização de Olheiras',
      desc: 'Queixa de olhar pesado, olheiras profundas e sulco lacrimal aparente. Protocolo realizado com Ácido Hialurônico de micro-partículas e Toxina Botulínica preventiva na glabela e cauda dos olhos.',
      tempo: '30 dias após aplicação',
      imgAntes: 'assets/caso2-antes.jpg',
      imgDepois: 'assets/caso2-depois.jpg',
      waText: 'Olá, Dra. Sofia! Gostaria de avaliar um protocolo semelhante ao Caso 02 (Rejuvenescimento do Olhar & Olheiras).'
    },
    3: {
      tag: 'Caso Clínico nº 03 • Paciente 44 anos',
      title: 'Clareamento de Melasma & Uniformização com Laser Lavieen',
      desc: 'Queixa de manchas solares resistentes, poros dilatados e textura opaca. Realizadas 3 sessões de Laser Lavieen de Túlio 1927nm com drug delivery de antioxidantes e clareadores tópicos.',
      tempo: '45 dias após 3ª sessão',
      imgAntes: 'assets/caso3-antes.jpg',
      imgDepois: 'assets/caso3-depois.jpg',
      waText: 'Olá, Dra. Sofia! Gostaria de avaliar um protocolo semelhante ao Caso 03 (Clareamento de Melasma & Glow Lavieen).'
    }
  };

  let currentCase = 1;
  let isDragging = false;
  let autoPlayTimer = null;
  let isUserInteracting = false;

  // Function to switch case
  function loadCase(caseNum) {
    const data = casesData[caseNum];
    if (!data) return;

    currentCase = caseNum;

    // Fade effect during switch
    container.style.opacity = '0.4';
    setTimeout(() => {
      imgAntes.src = data.imgAntes;
      imgDepois.src = data.imgDepois;
      if (caseTag) caseTag.textContent = data.tag;
      if (caseTitle) caseTitle.textContent = data.title;
      if (caseDesc) caseDesc.textContent = data.desc;
      if (caseTempo) caseTempo.textContent = data.tempo;
      if (caseWaBtn) {
        caseWaBtn.href = `https://wa.me/5511994009450?text=${encodeURIComponent(data.waText)}`;
      }
      container.style.opacity = '1';
    }, 180);

    // Update active button
    navBtns.forEach(btn => {
      if (parseInt(btn.getAttribute('data-case')) === caseNum) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Reset handle to center
    setSliderPosition(50);
  }

  // Button clicks
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const caseNum = parseInt(btn.getAttribute('data-case'));
      loadCase(caseNum);
      pauseAutoPlay();
    });
  });

  // Slider Dragging Logic
  function setSliderPosition(percentage) {
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;

    beforeWrap.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }

  function updateSliderFromEvent(clientX) {
    const rect = container.getBoundingClientRect();
    let position = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(position);
  }

  // Mouse drag
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    isUserInteracting = true;
    updateSliderFromEvent(e.clientX);
    pauseAutoPlay();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSliderFromEvent(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch drag
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    isUserInteracting = true;
    updateSliderFromEvent(e.touches[0].clientX);
    pauseAutoPlay();
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    updateSliderFromEvent(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Auto-play Rotation (cycles cases every 6.5 seconds)
  function startAutoPlay() {
    autoPlayTimer = setInterval(() => {
      if (!isUserInteracting) {
        let nextCase = currentCase + 1;
        if (nextCase > 3) nextCase = 1;
        loadCase(nextCase);
      }
    }, 6500);
  }

  function pauseAutoPlay() {
    clearInterval(autoPlayTimer);
    // Resume autoplay after 12 seconds of inactivity
    setTimeout(() => {
      isUserInteracting = false;
      startAutoPlay();
    }, 12000);
  }

  startAutoPlay();
}

/* --------------------------------------------------------------------------
   5. Procedure Tabs Switcher
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
   6. Aesthetic Diagnostic Quiz Wizard (3 Steps)
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
    nome: '',
    telefone: ''
  };

  // Option selection logic in Step 1 & 2
  document.querySelectorAll('.quiz-option-card').forEach(card => {
    card.addEventListener('click', () => {
      const parentStep = card.closest('.quiz-step');
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
        `⏳ *Faixa Etária:* ${quizData.faixaEtaria || 'Não informada'}\n\n` +
        `Gostaria de verificar a disponibilidade de horários para este mês!`;

      const whatsappUrl = `https://wa.me/${phoneClinic}?text=${encodeURIComponent(msg)}`;
      window.open(whatsappUrl, '_blank');
    });
  }
}

/* --------------------------------------------------------------------------
   7. Animated Metric Counters
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
   8. FAQ Accordion
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
   9. Contact Form Handler (WhatsApp Direct)
   -------------------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('contact-nome').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const procedimento = document.getElementById('contact-procedimento').value;

    const phoneClinic = '5511994009450';
    const msg = `Olá, Dra. Sofia Moraes! ✨\n\nGostaria de agendar uma avaliação na clínica:\n\n` +
      `👤 *Nome:* ${nome}\n` +
      `📱 *Telefone:* ${phone}\n` +
      `💉 *Interesse:* ${procedimento || 'Consulta Geral de Dermatologia'}\n\n` +
      `Aguardo o retorno para agendarmos o melhor horário!`;

    const whatsappUrl = `https://wa.me/${phoneClinic}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  });
}
