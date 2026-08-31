# 🔍 Schema.org JSON-LD para Produto E-commerce

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Nome do Produto Incrível",
  "image": [
    "https://minhaloja.com.br/images/produto-1x1.jpg"
  ],
  "description": "Descrição persuasiva e detalhada do produto.",
  "sku": "PROD-00123",
  "brand": {
    "@type": "Brand",
    "name": "Marca Exemplo"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://minhaloja.com.br/produto/exemplo",
    "priceCurrency": "BRL",
    "price": "149.90",
    "priceValidUntil": "2027-12-31",
    "itemCondition": "https://schema.org/NewCondition",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Minha Loja Online"
    }
  }
}
</script>
```
