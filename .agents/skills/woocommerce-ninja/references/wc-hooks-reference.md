# 📚 Referência Rápida de Hooks do WooCommerce

## 1. Página de Produto Individual (`single-product`)

```text
woocommerce_before_single_product
woocommerce_before_single_product_summary
  ├── woocommerce_show_product_sale_flash (priority 10)
  └── woocommerce_show_product_images (priority 20)

woocommerce_single_product_summary
  ├── woocommerce_template_single_title (priority 5)
  ├── woocommerce_template_single_rating (priority 10)
  ├── woocommerce_template_single_price (priority 10)
  ├── woocommerce_template_single_excerpt (priority 20)
  ├── woocommerce_template_single_add_to_cart (priority 30)
  ├── woocommerce_template_single_meta (priority 40)
  └── woocommerce_template_single_sharing (priority 50)

woocommerce_after_single_product_summary
  ├── woocommerce_output_product_data_tabs (priority 10)
  ├── woocommerce_upsell_display (priority 15)
  └── woocommerce_output_related_products (priority 20)

woocommerce_after_single_product
```

---

## 2. Página de Carrinho (`cart`)

- `woocommerce_before_cart`
- `woocommerce_before_cart_table`
- `woocommerce_before_cart_contents`
- `woocommerce_after_cart_contents`
- `woocommerce_after_cart_table`
- `woocommerce_before_cart_totals`
- `woocommerce_cart_totals_before_shipping`
- `woocommerce_cart_totals_after_shipping`
- `woocommerce_after_cart_totals`
- `woocommerce_after_cart`

---

## 3. Página de Checkout (`checkout`)

- `woocommerce_before_checkout_form`
- `woocommerce_checkout_before_customer_details`
- `woocommerce_checkout_billing`
- `woocommerce_checkout_shipping`
- `woocommerce_checkout_after_customer_details`
- `woocommerce_checkout_before_order_review_heading`
- `woocommerce_checkout_order_review`
- `woocommerce_checkout_after_order_review`
- `woocommerce_after_checkout_form`

### Hooks de Processamento de Pedido:
- `woocommerce_checkout_create_order` (manipulação do objeto `$order` antes de salvar)
- `woocommerce_checkout_order_processed` (após salvar pedido)
- `woocommerce_thankyou` (página de obrigado / confirmação de pedido)
