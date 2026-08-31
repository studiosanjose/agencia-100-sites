---
name: wp-performance-scaling
description: Use this skill to optimize WordPress and WooCommerce speed, reduce TTFB, configure caching (Redis, LiteSpeed, FastCGI), optimize MySQL queries, clean bloated databases, and achieve 90+ on Google PageSpeed Insights / Core Web Vitals.
---

# ⚡ WordPress & WooCommerce Performance Scaling

Esta skill fornece o passo a passo técnico para acelerar lojas WordPress e suportar alto tráfego sem lentidão ou quedas.

---

## 🛠️ Procedimentos de Otimização

### 1. Caching em Múltiplas Camadas
- **Object Cache (Redis / Memcached)**: Imprescindível para WooCommerce. Armazena consultas complexas em RAM, aliviando o MySQL.
- **Page Caching / HTML Cache**: Caching estático em nível de servidor (LiteSpeed Cache, Nginx FastCGI Cache ou WP Rocket) com exclusão automática das páginas de `/carrinho/`, `/checkout/` e `/minha-conta/`.
- **OPcache (PHP)**: Certifique-se de que o OPcache está ativo no `php.ini` com memória suficiente (`opcache.memory_consumption = 256` ou `512`).

### 2. Otimização de Banco de Dados WooCommerce
- Limpeza de transients expirados e logs do **Action Scheduler**:
  ```sql
  DELETE FROM wp_options WHERE option_name LIKE '_transient_wc_session_%';
  DELETE FROM wp_options WHERE option_name LIKE '_transient_timeout_%';
  ```
- Conversão para tabelas InnoDB e verificação de índices.
- Ativação do **High-Performance Order Storage (HPOS)** no WooCommerce (tabelas dedicadas `wc_orders` em vez de `wp_posts` / `wp_postmeta`).

Consulte os guias avançados em [references/wp-cache-db-guide.md](./references/wp-cache-db-guide.md).
