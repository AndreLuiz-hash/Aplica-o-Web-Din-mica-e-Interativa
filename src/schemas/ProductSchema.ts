import { z } from 'zod'

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  thumbnail: z.string(),
  category: z.string(),
  rating: z.number(),
  stock: z.number(),
  brand: z.string(),
})

export type Product = z.infer<typeof productSchema>