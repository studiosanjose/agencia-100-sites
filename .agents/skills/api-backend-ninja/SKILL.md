---
name: api-backend-ninja
description: Use this skill to design, build, and secure RESTful APIs, webhooks, and backend services with Node.js, Express, FastAPI, or PHP, including authentication, rate-limiting, and resilient error handling.
---

# 🔌 API & Backend Ninja Skill

Esta skill traz as diretrizes para criação de APIs e serviços backend de alto desempenho, seguros e documentados.

---

## 🛡️ Padrões Principais

1. **Códigos de Status HTTP Semânticos**:
   - `200 OK`, `201 Created`, `204 No Content`
   - `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `429 Too Many Requests`
   - `500 Internal Server Error`
2. **Resposta Padronizada**:
   - Retorne sempre um payload JSON consistente com `success: boolean`, `data: any`, `error?: string`.
3. **Validação de Webhooks**:
   - Sempre verifique a assinatura HMAC (ex: SHA-256) antes de processar webhooks de pagamento.

Consulte os exemplos em [references/api-patterns.md](./references/api-patterns.md).
