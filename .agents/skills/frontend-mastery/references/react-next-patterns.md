# ⚛️ Padrões de Código para React & Next.js

## 1. Exemplo de Server Action com Validação Zod

```typescript
// app/actions/contact.ts
'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('E-mail inválido'),
  message: z.string().min(10, 'Mensagem deve ter no mínimo 10 caracteres'),
});

export async function submitContactAction(formData: FormData) {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  const parse = contactSchema.safeParse(rawData);
  if (!parse.success) {
    return { success: false, errors: parse.error.flatten().fieldErrors };
  }

  // Processar envio (e-mail, webhook, banco)
  return { success: true };
}
```
