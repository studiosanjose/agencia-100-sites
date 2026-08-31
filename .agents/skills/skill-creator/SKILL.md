---
name: skill-creator
description: Use this skill to design, interview the user, structure, and create new modular Antigravity skills with valid YAML frontmatter, executable scripts, and reference documentation.
---

# 🛠️ Skill Creator (Meta-Skill)

Esta skill guia a criação interativa de novas habilidades (skills) para o Google Antigravity e agentes de IA.

---

## 🎯 Fluxo de Criação de Skills

1. **Entrevista / Alinhamento de Escopo**:
   - Qual é a tarefa ou processo específico que a nova skill automatizará?
   - Quais ferramentas, comandos ou bibliotecas são necessários?
   - Quais regras estritas e casos de borda devem ser evitados?

2. **Estruturação de Diretório**:
   Toda skill deve residir em `.agents/skills/<nome-da-skill>/`:
   ```text
   .agents/skills/<nome-da-skill>/
   ├── SKILL.md                  # Obrigatório: Frontmatter YAML + Instruções
   ├── references/               # Opcional: Documentações pesadas e cheatsheets
   └── scripts/                  # Opcional: Scripts utilitários executáveis
   ```

3. **Frontmatter YAML Rigoroso**:
   - `name`: Identificador único em minúsculas com hifens (ex: `meu-modulo-pro`).
   - `description`: Descrição em terceira pessoa detalhando **o que faz** e **quando ativar**.

Consulte o template pronto em [references/skill-template.md](./references/skill-template.md).
