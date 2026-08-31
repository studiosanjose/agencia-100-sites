# 🛡️ Diretrizes de Segurança e Privacidade

Segurança é prioridade máxima em qualquer aplicação web e loja virtual.

---

## 1. Proteção de Credenciais e Segredos

- **Nunca comitar segredos no Git**:
  - Chaves de API, senhas de banco de dados, tokens de gateway (Stripe, Mercado Pago, PIX) e Webhook secrets devem residir EXCLUSIVAMENTE em arquivos `.env` ou nas constantes do `wp-config.php` (fora do versionamento público).
  - Sempre inclua `.env`, `.env.local`, `wp-config-local.php` no `.gitignore`.

---

## 2. Validação Defensiva de Dados

- **Nunca confie no cliente**: Valide todos os parâmetros no lado do servidor (Server-side validation) usando schemas robustos (Zod, Joi) ou funções nativas de sanitização.
- **Proteção contra CSRF**: Utilize tokens CSRF / Nonces em todos os formulários e rotas POST/PUT/DELETE.
- **Proteção contra XSS**: Renderize saídas tratadas e configure cabeçalhos HTTP de segurança (`Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`).
- **Prevenção de Abuso & Rate Limiting**: Implemente rate limiting em endpoints de autenticação, recuperação de senha, checkout e formulários de contato contra spam/bots.
