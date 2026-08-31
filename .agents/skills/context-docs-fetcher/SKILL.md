---
name: context-docs-fetcher
description: Use this skill to prevent AI hallucination and outdated API usage by querying official, up-to-date documentation for libraries, frameworks, and APIs before writing code.
---

# 📚 Context Docs Fetcher (Anti-Hallucination)

Esta skill impede alucinações de métodos obsoletos ou bibliotecas inexistentes exigindo a leitura prévia de documentações oficiais.

---

## 🧭 Diretrizes de Consulta

1. **Sempre verificar versões**:
   - Next.js 14/15 (App Router vs Pages Router)
   - React 19 (Server Actions, `use()` hook)
   - WooCommerce 8/9+ (HPOS vs wp_postmeta)
   - Tailwind CSS v4
2. **Utilizar Ferramentas de Leitura**:
   - Use `read_url_content` ou o conector MCP `fetch` para ler a API doc oficial antes de instanciar componentes desconhecidos.

Consulte a lista de fontes confiáveis em [references/trusted-sources.md](./references/trusted-sources.md).
