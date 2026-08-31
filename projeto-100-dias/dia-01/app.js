/**
 * VANGUARD & PRADO ADVOCACIA TRIBUTÁRIA
 * Scripts de Interatividade, Animações e Construtor de WhatsApp Fiscal
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. MENU MOBILE & NAVEGAÇÃO SUAVE
     ========================================================================== */
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Fechar ao clicar em links
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ==========================================================================
     2. ANIMAÇÃO DE CONTAGEM PROGRESSIVA DOS NÚMEROS (COUNT-UP)
     ========================================================================== */
  const statsGrid = document.getElementById('statsGrid');
  let animatedStats = false;

  function animateNumbers() {
    const numbers = document.querySelectorAll('.trust-number');
    
    numbers.forEach(el => {
      const target = parseFloat(el.getAttribute('data-target'));
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const isLocale = el.getAttribute('data-format') === 'locale';
      
      const duration = 2000; // 2 segundos
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing suave (easeOutExpo)
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = target * ease;

        let formatted = decimals > 0 ? currentVal.toFixed(decimals) : Math.floor(currentVal);
        if (isLocale) {
          formatted = Math.floor(currentVal).toLocaleString('pt-BR');
        }

        el.textContent = `${prefix}${formatted}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          // Garantir valor final exato
          let finalFormatted = decimals > 0 ? target.toFixed(decimals) : target;
          if (isLocale) {
            finalFormatted = target.toLocaleString('pt-BR');
          }
          el.textContent = `${prefix}${finalFormatted}${suffix}`;
        }
      }

      requestAnimationFrame(update);
    });
  }

  if (statsGrid && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedStats) {
          animatedStats = true;
          animateNumbers();
          observer.unobserve(statsGrid);
        }
      });
    }, { threshold: 0.25 });

    observer.observe(statsGrid);
  } else {
    animateNumbers();
  }

  /* ==========================================================================
     3. FAQ ACORDEÃO
     ========================================================================== */
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = header.nextElementSibling;
      const isOpen = item.classList.contains('active');

      // Fecha outros itens
      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
          otherItem.querySelector('.accordion-body').style.maxHeight = null;
        }
      });

      // Alterna o item clicado
      if (!isOpen) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 30 + 'px';
      } else {
        item.classList.remove('active');
        header.setAttribute('aria-expanded', 'false');
        body.style.maxHeight = null;
      }
    });
  });

  /* ==========================================================================
     4. MÁSCARA INTELIGENTE DE TELEFONE (DDD + 9 DÍGITOS)
     ========================================================================== */
  const phoneInput = document.getElementById('clientPhone');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);

      if (value.length > 6) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
      } else if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else if (value.length > 0) {
        value = `(${value}`;
      }

      e.target.value = value;
    });
  }

  /* ==========================================================================
     5. SIMULADOR & DIAGNÓSTICO TRIBUTÁRIO -> WHATSAPP
     ========================================================================== */
  const taxForm = document.getElementById('taxDiagnosisForm');

  if (taxForm) {
    taxForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const regime = (taxForm.querySelector('input[name="regime"]:checked') || {}).value || 'Não informado';
      const demanda = document.getElementById('demandSelect').value;
      const faturamento = (taxForm.querySelector('input[name="faturamento"]:checked') || {}).value || 'Não informado';
      const nome = document.getElementById('clientName').value.trim();
      const telefone = document.getElementById('clientPhone').value.trim();

      if (!nome || !telefone) {
        alert('Por favor, preencha seu nome e telefone para enviarmos a análise.');
        return;
      }

      // Monta a mensagem executiva formatada
      const mensagem = `Olá Dr. Marcos e Dra. Helena! Fiz o Diagnóstico Tributário no site da Vanguard & Prado:%0A%0A` +
        `👤 *Responsável:* ${encodeURIComponent(nome)}%0A` +
        `📱 *Contato:* ${encodeURIComponent(telefone)}%0A` +
        `🏢 *Regime Tributário:* ${encodeURIComponent(regime)}%0A` +
        `💰 *Faturamento Mensal:* ${encodeURIComponent(faturamento)}%0A` +
        `⚖️ *Demanda Principal:* ${encodeURIComponent(demanda)}%0A%0A` +
        `Gostaria de uma análise preliminar de viabilidade com os advogados titulares.`;

      const whatsappNumber = '5511998765432';
      const url = `https://wa.me/${whatsappNumber}?text=${mensagem}`;

      window.open(url, '_blank');
    });
  }

});
