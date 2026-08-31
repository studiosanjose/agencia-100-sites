# 🔌 Estrutura Padrão de Resposta de API

```json
// Sucesso
{
  "success": true,
  "data": {
    "orderId": "10492",
    "status": "processing",
    "total": 149.90
  }
}

// Erro
{
  "success": false,
  "error": {
    "code": "INVALID_COUPON",
    "message": "O cupom informado expirou ou não é válido para este carrinho."
  }
}
```
