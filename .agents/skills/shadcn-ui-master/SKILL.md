---
name: shadcn-ui-master
description: Use this skill when implementing accessible, modern UI components using shadcn/ui, Radix UI primitives, Lucide Icons, and Tailwind CSS.
---

# 🧩 shadcn/ui Master Skill

Esta skill traz as diretrizes de implementação de componentes acessíveis e elegantes baseados no padrão shadcn/ui.

---

## 🛠️ Boas Práticas

1. **Acessibilidade (a11y) Nativa**:
   - Utilize as primitivas do Radix UI (`@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, etc.) que suportam teclado e leitores de tela nativamente.
2. **Utilitário `cn()` (clsx + tailwind-merge)**:
   - Sempre utilize a função `cn(...)` para mesclar classes Tailwind dinamicamente sem conflito de especificidade.

Consulte os exemplos em [references/shadcn-patterns.md](./references/shadcn-patterns.md).
