# 🚀 Guia de Caching e Otimização de Banco de Dados WP/WooCommerce

## 1. Ativação do High-Performance Order Storage (HPOS)
O HPOS armazena pedidos em tabelas dedicadas (`wp_wc_orders`, `wp_wc_order_addresses`, etc.), acelerando as consultas de checkout e painel em até 40x em comparação com `wp_postmeta`.
- **Como verificar**: Acesse **WooCommerce > Configurações > Avançado > Recursos > Armazenamento de pedidos**.
- **Garantir compatibilidade**: Verifique se todos os plugins de frete, pagamento e nota fiscal suportam HPOS antes de desativar a sincronização legada.

---

## 2. Otimização de Imagens e Mídia
- Converter automaticamente imagens para **WebP / AVIF**.
- Definir dimensões explícitas (`width` e `height`) em todas as tags `<img>` para evitar Cumulative Layout Shift (CLS).
- Usar `loading="lazy"` para imagens abaixo da dobra e `fetchpriority="high"` na imagem principal do banner/produto (Largest Contentful Paint - LCP).

---

## 3. Desativação de Scripts Desnecessários em Páginas Específicas
Remova estilos e scripts pesados onde não são utilizados:
```php
add_action( 'wp_enqueue_scripts', 'agencia_desativar_scripts_desnecessarios', 99 );
function agencia_desativar_scripts_desnecessarios() {
    // Desativa scripts do Contact Form 7 fora da página de contato
    if ( ! is_page( 'contato' ) ) {
        wp_dequeue_script( 'contact-form-7' );
        wp_dequeue_style( 'contact-form-7' );
    }
    
    // Desativa scripts do carrinho em páginas estáticas
    if ( ! is_woocommerce() && ! is_cart() && ! is_checkout() ) {
        wp_dequeue_script( 'wc-cart-fragments' );
    }
}
```
