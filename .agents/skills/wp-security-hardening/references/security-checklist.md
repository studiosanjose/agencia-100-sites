# 🛡️ Checklist Avançado de Segurança WordPress & WooCommerce

## 1. Proteção de Diretório `uploads/`
Crie um arquivo `.htaccess` dentro de `wp-content/uploads/`:
```apache
<Files *.php>
deny from all
</Files>
```

---

## 2. Prevenção de Enumeração de Autores
Bloqueie requisições do tipo `/?author=1`:
```php
add_action( 'template_redirect', 'agencia_bloquear_enumeracao_autores' );
function agencia_bloquear_enumeracao_autores() {
    if ( is_author() && ! is_admin() ) {
        wp_redirect( home_url(), 301 );
        exit;
    }
}
```

---

## 3. Segurança de Checkout e Prevenção de Fraude
- Implemente validação de reCAPTCHA v3 / Cloudflare Turnstile no checkout e login.
- Limite tentativas de pagamento falhas consecutivas para evitar ataques de card testing (testadores de cartão de crédito roubado).
- Garanta que webhooks de pagamento (Stripe, Mercado Pago, Pagar.me) validam a assinatura criptográfica (`signature validation`) antes de atualizar o status do pedido para "Pago".
