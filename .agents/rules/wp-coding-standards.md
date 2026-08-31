# 🏷️ Padrões de Código para WordPress & WooCommerce

Ao desenvolver temas, plugins ou integrações para WordPress e WooCommerce:

---

## 1. Regras Fundamentais

- **Nunca edite o Core do WordPress ou Plugins diretamente**: Toda customização deve ser feita via Child Theme, plugins próprios (`mu-plugins` ou plugins customizados), ou via Hooks/Filtros.
- **Prefixação Obrigatória**: Todas as funções globais, classes, constantes, handles de scripts e opções de banco devem ser prefixadas com o identificador do projeto (ex: `agencia_`, `minhaloja_`).
- **Compatibilidade PHP**: Escrever código compatível com PHP 8.1+ e PHP 8.2+. Tipar retornos e parâmetros sempre que possível.

---

## 2. Hooks e Filtros WooCommerce

- **Sempre utilize Actions & Filters**:
  - Manipulação de dados antes de exibir: `apply_filters('nome_do_filtro', $dado)`
  - Execução de tarefas em eventos: `do_action('nome_da_action')`
- **Exemplo de Override Seguro no WooCommerce**:
  ```php
  add_action('woocommerce_before_single_product_summary', 'agencia_adicionar_badge_destaque', 5);
  function agencia_adicionar_badge_destaque() {
      global $product;
      if ( ! $product || ! $product->is_on_sale() ) {
          return;
      }
      echo '<span class="custom-sale-badge">' . esc_html__( 'Oferta Especial', 'agencia' ) . '</span>';
  }
  ```

---

## 3. Sanitização, Escape e Segurança

- **Entrada (Input)**: Sempre sanitize dados vindos de `$_POST`, `$_GET` e `$_REQUEST`:
  - `sanitize_text_field()` para strings simples.
  - `sanitize_email()` para e-mails.
  - `absint()` ou `intval()` para números inteiros / IDs.
  - `sanitize_textarea_field()` para textos longos.
- **Saída (Output / Escape)**: Sempre realize escape na renderização HTML:
  - `esc_html()` para texto puro dentro de tags.
  - `esc_attr()` para atributos HTML (`value=""`, `title=""`).
  - `esc_url()` para URLs e links (`href=""`, `src=""`).
  - `wp_kses_post()` para conteúdo rico formatado (HTML seguro).
- **Consultas no Banco (`$wpdb`)**:
  - SEMPRE utilize `$wpdb->prepare()` para evitar SQL Injection:
  ```php
  global $wpdb;
  $resultado = $wpdb->get_results(
      $wpdb->prepare(
          "SELECT * FROM {$wpdb->prefix}custom_table WHERE user_id = %d AND status = %s",
          $user_id,
          $status
      )
  );
  ```
- **Nonces**: Validar formulários e chamadas AJAX com `wp_create_nonce()` e `check_ajax_referer()` ou `wp_verify_nonce()`.

---

## 4. Performance e Queries

- Evite chamadas repetidas a `get_post_meta()` ou queries pesadas dentro de loops. Use `wp_cache_get()` ou Transients API (`set_transient()`, `get_transient()`).
- Utilize o WooCommerce CRUD methods (`$order->get_id()`, `$product->get_price()`) em vez de acessar propriedades diretamente.
