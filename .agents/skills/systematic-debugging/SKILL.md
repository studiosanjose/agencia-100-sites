---
name: systematic-debugging
description: Use this skill when troubleshooting complex bugs, silent failures, race conditions, or performance bottlenecks, applying a 4-phase diagnosis without fluff or unnecessary explanations.
---

# 🧪 Systematic Debugging Skill

Esta skill impõe um protocolo de investigação estruturado em 4 etapas para eliminar bugs de forma rápida e definitiva.

---

## 🔬 O Protocolo de 4 Fases

1. **Fase 1: Isolamento da Causa Raiz**:
   - Identificar a linha exata, payload de entrada e estado do sistema no momento da falha.
2. **Fase 2: Reconhecimento de Padrões**:
   - É um problema de concorrência, tipo incorreto, assincronicidade não tratada, cache antigo ou falha de rede?
3. **Fase 3: Formulação de Hipótese**:
   - Definir uma hipótese testável ("Se alterarmos o hook X para prioridade 20, o filtro Y será aplicado no momento correto").
4. **Fase 4: Correção Pontual & Validação**:
   - Aplicar a correção e executar o teste de regressão.

Consulte o playbook em [references/debugging-playbook.md](./references/debugging-playbook.md).
