---
name: woocommerce-ninja
description: Use this skill when developing, customizing, troubleshooting or optimizing WordPress and WooCommerce stores, including hooks, filters, template overrides, payment gateways, REST APIs, and WP-CLI commands.
---

# 🛒 WooCommerce & WordPress Ninja Skill

Esta skill fornece o guia definitivo para criar, customizar e automatizar lojas virtuais de alta performance no WooCommerce e WordPress.

---

## 🎯 Procedimentos Principais

### 1. Customização com Hooks do WooCommerce
- Nunca altere o código fonte do WooCommerce. Use a vasta arquitetura de `actions` e `filters`.
- Consulte o guia completo de hooks em [references/wc-hooks-reference.md](./references/wc-hooks-reference.md).

### 2. Modificação Segura de Templates
Para customizar o HTML de uma página ou componente WooCommerce:
1. Copie o arquivo original de `wp-content/plugins/woocommerce/templates/[caminho]/[arquivo].php`.
2. Cole no seu Child Theme em `wp-content/themes/[seu-child-theme]/woocommerce/[caminho]/[arquivo].php`.
3. Mantenha os hooks originais (`do_action(...)`) intactos para não quebrar plugins de gateways e extensões.

### 3. Automação e Manutenção via WP-CLI
Comandos essenciais para desenvolvimento ágil:
```bash
# Verificar status do WooCommerce e do sistema
wp wc status

# Gerar produtos de teste (dummy data)
wp wc product create --name="Produto Teste 1" --type="simple" --regular_price="99.90"

# Limpar cache de transients e sessões do WooCommerce
wp transient delete --all
wp wc tool run clear_sessions

# Gerenciar plugins com segurança
wp plugin list --status=active
wp plugin update --all --dry-run
```

### 4. Integração com WooCommerce REST API v3
- Utilize chaves geradas em: **WooCommerce > Configurações > Avançado > REST API**.
- Use autenticação Basic Auth com HTTPS para consultas e mutações de pedidos, clientes e produtos.
