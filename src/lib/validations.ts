import { z } from 'zod';

// Validação de telefone brasileiro
const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Nome deve ter no mínimo 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .trim(),

  phone: z
    .string()
    .regex(phoneRegex, 'Telefone deve estar no formato (XX) XXXXX-XXXX')
    .trim(),

  comment: z
    .string()
    .max(500, 'Comentário deve ter no máximo 500 caracteres')
    .optional()
    .or(z.literal('')),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
