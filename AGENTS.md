# 🚀 Diretrizes Gerais da Agência Web & E-commerce

Este repositório e workspace são dedicados a projetos de alto nível para agência digital, desenvolvimento web moderno e lojas virtuais no WordPress / WooCommerce.

---

## 🎯 Pilares de Desenvolvimento

1. **Excelência Visual Obrigatória**: Nenhum projeto entregue pode parecer um "MVP básico". Todas as interfaces devem possuir tipografia refinada, paletas harmoniosas, contrastes adequados e micro-animações suaves.
2. **Performance em Primeiro Lugar**: Lojas e sites devem buscar 90+ no Google Lighthouse e cumprir os Core Web Vitals (LCP < 2.5s, FID/INP < 200ms, CLS < 0.1).
3. **Segurança e Privacidade (LGPD/GDPR)**: Sanitização estrita de entradas, proteção contra injeções SQL/XSS, controle de nonces e proteção de dados sensíveis de clientes.
4. **Código Limpo e Manutenível**: Arquitetura modular, tipagem estrita no TypeScript, padrões do WordPress Core / PSR no PHP, e convenções semânticas no Git.
5. **Foco em Conversão (CRO)**: Layouts orientados à conversão, checkout simplificado, clareza em chamadas para ação (CTAs) e mensuração robusta (GA4 + GTM + Meta CAPI).

---

## 📂 Organização do Workspace

- `.agents/skills/`: Skills modulares para automações e fluxos guiados.
- `.agents/rules/`: Regras detalhadas de código, design e segurança.
- `.agents/mcp_config.json`: Conectores MCP disponíveis.

---

## 🛠️ Stack Tecnológica de Referência

- **WordPress / WooCommerce**: PHP 8+, WooCommerce 8+, WP-CLI, Gutenberg Blocks, ACF Pro, Hooks & Overrides seguros.
- **Frontend Moderno**: Next.js, React, TypeScript, TailwindCSS / Vanilla CSS de alta fidelidade.
- **Ferramentas & Integrações**: REST APIs, Webhooks, gateways de pagamento (PIX, Mercado Pago, Stripe), GTM e GA4.
