# ⚖️ Dia 01: Landing Page para Escritório de Advocacia Premium

> **Projeto**: Vanguard & Prado Advogados Associados  
> **Fase**: 01 — Landing Pages One-Page de Alta Conversão  
> **Tecnologias**: HTML5 Semântico, CSS3 Moderno (Design Tokens + Glassmorphism), JavaScript Puro (Vanilla JS).

---

## 💼 Ficha Comercial do Projeto (Para sua Agência)

- **Público-Alvo**: Escritórios de advocacia de médio e alto padrão, advogados autônomos e consultorias jurídicas.
- **Dores do Cliente**:
  - Dificuldade de captar clientes empresariais na internet.
  - Sites antigos que parecem lentos e não transmitem autoridade.
  - Restrições éticas da OAB para anúncios diretos (precisam de uma abordagem institucional e consultiva).
- **Proposta de Valor**:
  - Design *Dark Luxury & Gold* que transmite sobriedade e prestígio.
  - Ferramenta de **Diagnóstico Jurídico Rápido** que pré-qualifica o lead e envia os dados organizados no WhatsApp do advogado.
  - Estrutura 100% adequada ao Provimento 205/2021 da OAB e LGPD.
- **Preço Sugerido de Venda**: **R$ 2.000 a R$ 3.800** (ou R$ 1.500 + mensalidade de R$ 150/mês para hospedagem/manutenção).

---

## 🧠 Guia Didático de Aprendizado (O que você aprendeu na prática)

### 1. HTML5 Semântico & SEO
- **Tags Semânticas**: Em vez de usar apenas `<div>`, usamos `<header>`, `<nav>`, `<section>`, `<main>` e `<footer>`. Isso melhora o ranqueamento no Google.
- **Schema.org `LegalService`**: Adicionamos um bloco de dados estruturados JSON-LD no `<head>`. Isso informa aos motores de busca que o site pertence a um escritório de advocacia legítimo, com endereço, telefone e horário de funcionamento.

### 2. CSS3 Moderno (Sem dependência de frameworks pesados)
- **Variáveis CSS (`:root`)**: Centralizamos cores, fontes e espaçamentos no topo do arquivo. Se o cliente quiser mudar a cor de dourado para azul royal, basta alterar uma única variável.
- **CSS Grid & Flexbox**:
  - `display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));` — Faz os cards se adaptarem sozinhos em telas de celular, tablet e computador sem quebrar.
- **Glassmorphism**: Criado combinando `background: rgba(18, 26, 41, 0.75)` com `backdrop-filter: blur(16px)` e bordas translúcidas sutis.

### 3. JavaScript Interativo (Vanilla JS)
- **Diagnóstico com WhatsApp Inteligente**:
  - O script captura as escolhas do usuário no formulário e monta uma mensagem estruturada com emojis.
  - Usa `encodeURIComponent()` para transformar o texto com quebras de linha e caracteres especiais em um link seguro para o WhatsApp Web / App.
- **Acordeão do FAQ com `scrollHeight`**:
  - O JavaScript calcula a altura exata do conteúdo (`element.scrollHeight`) para que a animação de abertura e fechamento seja 100% suave.
- **Máscara de Telefone com Regex**:
  - Formata o número automaticamente enquanto o usuário digita no padrão `(11) 99999-9999`.

---

## 🚀 Como testar localmente
Basta abrir o arquivo `index.html` em qualquer navegador web ou utilizar a extensão Live Server.
