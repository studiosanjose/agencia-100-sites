# 🎨 Diretrizes de Excelência Visual & Design de Agência

Todo projeto desenvolvido deve refletir qualidade de agência premium, evitando designs simplórios ou genéricos.

---

## 1. Princípios Visuais

- **Tipografia Cuidadosamente Selecionada**:
  - Evite fontes padrão do navegador (Arial, Times New Roman).
  - Utilize fontes modernas do Google Fonts (ex: `Plus Jakarta Sans`, `Inter`, `Outfit`, `Space Grotesk`, `Playfair Display` para títulos elegantes de e-commerce de luxo).
- **Paleta de Cores Harmônica**:
  - Defina cores primárias, secundárias, neutras e de destaque usando variáveis CSS ou HSL.
  - Garanta contraste acessível (WCAG AA no mínimo) para legibilidade de textos e botões de compra.
- **Hierarquia Visual Clara**:
  - Destaque óbvio para botões de ação principal (CTA: "Comprar Agora", "Adicionar ao Carrinho", "Solicitar Orçamento").
  - Espaçamentos consistentes (grid de 4px / 8px).

---

## 2. Efeitos Modernos e Micro-interações

- **Glassmorphism & Profundidade**: Uso equilibrado de `backdrop-filter: blur()`, bordas sutis translúcidas e sombras suaves em camadas (`box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1)`).
- **Micro-animações**: Hover suave em cards, transições de estado (`transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1)`), feedback visual instantâneo ao clicar em botões (loading spinner / checkmark).
- **Dark Mode & Light Mode**: Suporte nativo ou fácil alternância através de variáveis CSS.
