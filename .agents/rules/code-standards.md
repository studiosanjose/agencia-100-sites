# 💻 Padrões de Código Moderno (Frontend & Backend)

Diretrizes para desenvolvimento em JavaScript, TypeScript, Node.js, React e Next.js.

---

## 1. TypeScript & JavaScript

- **TypeScript Estrito**: Sempre use `strict: true`. Evite `any` a todo custo; use `unknown`, generics ou interfaces/tipos bem definidos.
- **Async/Await com Error Handling**: Sempre encapsule operações assíncronas em blocos `try/catch` com tratamento amigável e logging estruturado.
- **Imutabilidade**: Prefira métodos funcionais (`map`, `filter`, `reduce`) e operadores spread/rest (`...`) ao invés de mutação direta de objetos e arrays.

---

## 2. React & Next.js

- **Server vs Client Components**: Em Next.js App Router, mantenha os componentes no servidor por padrão (`Server Components`) para máxima performance e SEO. Adicione `'use client'` apenas quando necessário (interatividade, hooks de estado, eventos do navegador).
- **Componentes Atômicos & Reutilizáveis**: Divida interfaces complexas em componentes pequenos e focados.
- **Gerenciamento de Estado**: Prefira estados locais (`useState`/`useReducer`), contextos leves ou Zustand para estados globais. Evite prop drilling excessivo.

---

## 3. Estrutura de Arquivos e Pastas

```text
src/
├── app/               # Rotas e páginas (Next.js App Router)
├── components/        # Componentes UI (Button, Modal, Card, Navbar)
│   ├── ui/            # Elementos base de UI
│   └── forms/         # Formulários e validações
├── lib/               # Utilitários, clientes de API e helpers
├── hooks/             # Custom React hooks
├── types/             # Definições de tipos TypeScript
└── styles/            # CSS global e temas
```
