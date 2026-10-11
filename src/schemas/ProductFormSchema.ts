import { z } from 'zod'

export const productFormSchema = z.object({
  title: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres.'),
  description: z
    .string()
    .min(10, 'A descrição deve ter pelo menos 10 caracteres.'),
  price: z
    .number()
    .min(0.01, 'O preço deve ser maior que zero.'),
  category: z.string().min(1, 'Selecione uma categoria.'),
  stock: z
    .number()
    .int('O estoque deve ser um número inteiro.')
    .min(0, 'O estoque não pode ser negativo.'),
})

export type ProductFormValues = z.infer<typeof productFormSchema>