# 📊 Modelo de dataLayer GA4 & Meta CAPI para WooCommerce

## 1. Exemplo de dataLayer no Evento `purchase`

Insira o script abaixo no hook `woocommerce_thankyou`:

```php
add_action( 'woocommerce_thankyou', 'agencia_datalayer_purchase', 10, 1 );
function agencia_datalayer_purchase( $order_id ) {
    if ( ! $order_id ) return;
    
    $order = wc_get_order( $order_id );
    if ( ! $order ) return;

    $items = [];
    foreach ( $order->get_items() as $item_id => $item ) {
        $product = $item->get_product();
        $items[] = [
            'item_id'        => (string) $product->get_id(),
            'item_name'      => $item->get_name(),
            'price'          => (float) $order->get_item_total( $item, false, true ),
            'quantity'       => (int) $item->get_quantity(),
            'item_category'  => wp_strip_all_tags( wc_get_product_category_list( $product->get_id(), ', ' ) ),
        ];
    }

    $event_id = 'order_' . $order->get_id() . '_' . $order->get_date_created()->getTimestamp();
    ?>
    <script>
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ ecommerce: null }); // Limpa o objeto anterior
    window.dataLayer.push({
        event: "purchase",
        event_id: "<?php echo esc_js( $event_id ); ?>",
        ecommerce: {
            transaction_id: "<?php echo esc_js( (string) $order->get_id() ); ?>",
            value: <?php echo (float) $order->get_total(); ?>,
            tax: <?php echo (float) $order->get_total_tax(); ?>,
            shipping: <?php echo (float) $order->get_shipping_total(); ?>,
            currency: "<?php echo esc_js( $order->get_currency() ); ?>",
            items: <?php echo json_encode( $items ); ?>
        }
    });
    </script>
    <?php
}
```

---

## 2. Estratégias de CRO de Alto Impacto
- **Checkout em 1 Passo (One-Step Checkout)**: Reduz a taxa de abandono eliminando etapas desnecessárias.
- **Frete com Barra de Progresso**: Ex: "Faltam apenas R$ 45,00 para Frete Grátis!" (aumenta o Ticket Médio / AOV).
- **Garantias & Selos de Confiança Próximos ao CTA**: Exibir selos de segurança SSL, entrega rápida e avaliação de clientes logo abaixo do botão "Finalizar Compra".
