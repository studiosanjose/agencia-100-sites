/**
 * Vanguard & Prado Advogados Associados
 * Lógica Interativa: Menu Mobile, Acordeão FAQ, Diagnóstico e WhatsApp
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. MENU MOBILE
     ========================================================================== */
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Fechar o menu ao clicar em qualquer link de navegação
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ==========================================================================
     2. FAQ ACORDEÃO (ACESSIBILIDADE & ANIMAÇÃO SUAVE)
     ========================================================================== */
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha todos os outros acordeões
      accordionItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherHeader = otherItem.querySelector('.accordion-header');
        const otherBody = otherItem.querySelector('.accordion-body');
        if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
        if (otherBody) otherBody.style.maxHeight = null;
      });

      // Se o clicado não estava ativo, abre
      if (!isActive) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  /* ==========================================================================
     3. MÁSCARA INTELIGENTE DE TELEFONE / WHATSAPP
     ========================================================================== */
  const phoneInput = document.getElementById('clientPhone');

  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, ''); // remove tudo que não for dígito
      if (value.length > 11) value = value.slice(0, 11); // limita a 11 dígitos

      if (value.length > 10) {
        // Formato Celular: (XX) 9XXXX-XXXX
        value = value.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      } else if (value.length > 5) {
        // Formato Fixo / Parcial: (XX) XXXX-XXXX
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
      }
      e.target.value = value;
    });
  }

  /* ==========================================================================
     4. FORMULÁRIO DE DIAGNÓSTICO JURÍDICO & REDIRECIONAMENTO WHATSAPP
     ========================================================================== */
  const diagnosisForm = document.getElementById('diagnosisForm');

  if (diagnosisForm) {
    diagnosisForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const perfil = diagnosisForm.querySelector('input[name="perfil"]:checked')?.value || 'Não informado';
      const area = document.getElementById('areaSelect')?.value || 'Geral';
      const urgencia = diagnosisForm.querySelector('input[name="urgencia"]:checked')?.value || 'Não informada';
      const nome = document.getElementById('clientName')?.value.trim() || 'Cliente';
      const telefone = document.getElementById('clientPhone')?.value.trim() || 'Não informado';

      // Monta mensagem parametrizada e profissional para o WhatsApp
      const mensagem = `Olá, Dr(a). Gostaria de atendimento para um caso jurídico preliminar:\n\n` +
        `👤 *Nome:* ${nome}\n` +
        `🏢 *Perfil:* ${perfil}\n` +
        `⚖️ *Área Jurídica:* ${area}\n` +
        `⏱ *Urgência:* ${urgencia}\n` +
        `📱 *Contato:* ${telefone}\n\n` +
        `Aguardo retorno de um advogado especialista.`;

      const whatsappNumber = '5511998765432';
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;

      // Abre o WhatsApp com a mensagem pronta
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

  /* ==========================================================================
     5. SCROLL SUAVE PARA LINKS INTERNOS
     ========================================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});
