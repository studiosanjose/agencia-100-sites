---
name: ecommerce-cro-tracking
description: Use this skill to implement Google Tag Manager (GTM) dataLayers, Google Analytics 4 (GA4) Enhanced Ecommerce tracking, Meta Conversions API (CAPI), and Conversion Rate Optimization (CRO) strategies for WooCommerce and online stores.
---

# 📈 E-commerce CRO & Tracking Pro Skill

Esta skill orienta a implementação precisa de mensuração analítica (GTM/GA4/Meta CAPI) e técnicas de conversão para lojas virtuais.

---

## 🎯 Objetivos de Rastreamento

1. **Eventos Padrão do GA4 E-commerce**:
   - `view_item_list` (Visualização de categoria)
   - `view_item` (Página de produto)
   - `add_to_cart` (Adicionar ao carrinho)
   - `remove_from_cart` (Remover do carrinho)
   - `begin_checkout` (Início do checkout)
   - `add_shipping_info` (Seleção de frete)
   - `add_payment_info` (Seleção de forma de pagamento)
   - `purchase` (Compra concluída com sucesso com ID de transação, receita, impostos e frete)

2. **Deduplicação de Eventos (Meta Pixel + CAPI)**:
   - Gerar `event_id` único no servidor para cada compra e enviar tanto no front (Pixel) quanto no back (CAPI) para atingir pontuação de qualidade de evento 9.0+.

Consulte as especificações e o código do dataLayer em [references/datalayer-ga4-capi.md](./references/datalayer-ga4-capi.md).
