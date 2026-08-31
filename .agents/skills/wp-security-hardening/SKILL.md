---
name: wp-security-hardening
description: Use this skill to audit, protect, and harden WordPress and WooCommerce installations against SQL injection, XSS, CSRF, brute-force attacks, unauthorized file edits, and payment fraud.
---

# 🛡️ WordPress & WooCommerce Security Hardening

Esta skill fornece instruções completas de segurança para blindar sites WordPress e lojas WooCommerce contra ataques, vazamentos de dados e fraudes.

---

## 🔒 Checklist de Blindagem

1. **Proteção de Arquivos Críticos no `.htaccess` / Nginx**:
   - Bloquear acesso a `wp-config.php`, arquivos `.env`, `.git` e logs.
   - Desativar execução de scripts PHP dentro da pasta `wp-content/uploads/`.

2. **Hardening do `wp-config.php`**:
   Adicionar ao arquivo `wp-config.php`:
   ```php
   // Desativar editor de arquivos no painel administrativo
   define( 'DISALLOW_FILE_EDIT', true );

   // Forçar SSL no painel e checkout
   define( 'FORCE_SSL_ADMIN', true );

   // Desativar depuração pública
   define( 'WP_DEBUG', false );
   define( 'WP_DEBUG_DISPLAY', false );
   define( 'WP_DEBUG_LOG', true );
   ```

3. **Desativação de XML-RPC e Enumeração de Usuários**:
   ```php
   // Desativar XML-RPC completamente
   add_filter( 'xmlrpc_enabled', '__return_false' );
   ```

Consulte o checklist detalhado em [references/security-checklist.md](./references/security-checklist.md).
