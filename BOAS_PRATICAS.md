# 📘 Manual de Boas Práticas & Padrões de Engenharia da Agência

Este guia estabelece os **padrões de excelência técnica, visual, conversão (CRO) e SEO** para todos os projetos desenvolvidos na agência e no desafio dos **100 Sites em 100 Dias**.

---

## 🏛️ 1. Pilares de Design & Estética Visual

1. **Tipografia de Alto Nível (Nunca usar fontes padrão)**:
   - **Títulos (Headings)**: Fontes com personalidade e autoridade.
     - *Nichos Clássicos / Luxo / Jurídico*: `Cormorant Garamond`, `Cinzel`, `Playfair Display`.
     - *Nichos Modernos / Saúde / Imobiliário / Tech*: `Plus Jakarta Sans`, `Outfit`, `Inter`.
   - **Corpo de Texto (Body)**: Alta legibilidade técnica com contraste mínimo de `4.5:1` (WCAG AA).
2. **Harmonia de Cores & Design Tokens**:
   - Definir sempre variáveis CSS (`:root`) para cores primárias, superfícies, bordas e acentos.
   - **Paletas Claras de Luxo**: Tons como *Warm Alabaster* (`#f9f7f2`), *Linen* (`#f1ede3`), *Pure White* (`#ffffff`), com acentos nobres em *Ouro Brunido* (`#9e7b3b`) ou *Navy Charcoal* (`#11161f`).
   - **Micro-interações Suaves**: Transições com `cubic-bezier(0.16, 1, 0.3, 1)` em hovers, elevação sutil de cards (`translateY(-4px)`), e foco iluminado em fotos.

---

## 🚀 2. Engenharia de Conversão (CRO) & WhatsApp

1. **O Humano como Alma do Site**:
   - Sempre destacar os profissionais titulares/fundadores com fotos verticais de alta qualidade e credenciais visíveis.
2. **Formulários Dinâmicos com Redirecionamento Inteligente**:
   - Todo diagnóstico ou simulador deve gerar uma mensagem estruturada com marcadores (`👤 Nome:`, `🏢 Empresa:`, `⚖️ Necessidade:`) enviada direto para o WhatsApp do responsável.
3. **Múltiplos Pontos de Contato Não Invasivos**:
   - Botão de WhatsApp no Header (plantão).
   - Botão principal no Hero (primeira dobra).
   - Botão flutuante fixo no canto inferior direito com foto do profissional e status "Online".

---

## 🔍 3. SEO Técnico & Estruturação Semântica

1. **Marcação Semântica Única**:
   - Apenas **um único `<h1>` por página** contendo a palavra-chave principal e a proposta de valor.
   - Hierarquia estrita: `<h1>` -> `<h2>` -> `<h3>` -> `<h4>`.
2. **Dados Estruturados Schema.org JSON-LD**:
   - Implementar em todas as páginas o schema correto para o Google indexar com rich snippets:
     - Advocacia: `LegalService` & `Attorney`
     - Clínicas/Médicos: `MedicalBusiness` & `Physician`
     - Imobiliárias: `RealEstateAgent`
     - Garagens de Carros: `AutoDealer`
     - Lojas Virtuais: `Store` & `Product`
3. **Meta Tags Completas**:
   - `title` descritivo (< 60 caracteres).
   - `meta description` atrativa com chamada para ação (< 155 caracteres).
   - OpenGraph tags (`og:title`, `og:description`, `og:image`, `og:type`).

---

## ⚡ 4. Performance & Core Web Vitals

1. **Meta de Velocidade**:
   - Google PageSpeed Insights **90+ no Mobile e Desktop**.
   - LCP (Largest Contentful Paint) < 2.5s.
   - CLS (Cumulative Layout Shift) < 0.1.
2. **Otimização de Mídia**:
   - Imagens no formato correto (`.webp` ou `.jpg` comprimido) com dimensões adequadas.
   - Atributos `alt` descritivos em 100% das imagens.
   - Carregamento assíncrono de scripts com `IntersectionObserver` para contadores e animações.

---

## 🛡️ 5. Conformidade Ética & Regulamentações por Nicho

- **Advocacia (OAB)**: Respeitar o Provimento nº 205/2021 da OAB (caráter informativo, sem mercantilização agressiva ou promessa de causa ganha).
- **Medicina / Odonto (CFM / CFO)**: Indicação clara de CRM/CRO e RQE (registro de qualificação de especialista), sem fotos apelativas ou promessas milagrosas.
- **LGPD (Lei Geral de Proteção de Dados)**: Aviso de privacidade transparente abaixo de formulários e sigilo estrito de dados captados.

---

## 🔄 6. Fluxo de Git & Deploy Profissional

1. **Padrão Conventional Commits**:
   - `feat(modulo):` para novas funcionalidades.
   - `style(modulo):` para alterações visuais e CSS.
   - `fix(modulo):` para correções de bugs.
   - `docs(modulo):` para documentação.
2. **Deploy Automatizado**:
   - Toda alteração aprovada é enviada via `git push origin main` e atualizada no GitHub Pages.

---

## ✅ 7. Checklist Pré-Entrega (10 Passos antes de publicar)

- [ ] 1. O site abre perfeitamente no celular (testar em iPhone e Android)?
- [ ] 2. Nenhum elemento ficou sobreposto no menu ou no rodapé?
- [ ] 3. Todos os links de WhatsApp abrem a conversa com o número e mensagem corretos?
- [ ] 4. Há apenas um `<h1>` na página?
- [ ] 5. As imagens têm descrições no atributo `alt`?
- [ ] 6. O Schema.org JSON-LD está validado sem erros?
- [ ] 7. Os números animados (count-up) disparam suavemente na rolagem?
- [ ] 8. As máscaras de formulário (telefone/DDD) funcionam sem travar?
- [ ] 9. O contraste de cores é nítido e confortável para leitura?
- [ ] 10. O commit foi feito com mensagem clara e enviado para o GitHub?
