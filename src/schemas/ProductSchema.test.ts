
import { describe, it, expect } from 'vitest'
import { productSchema } from './ProductSchema'

describe('productSchema', () => {
  it('aceita um produto válido', () => {
    const product = {
      id: 1,
      title: 'Semente de milho',
      description: 'Semente de milho para plantio',
      price: 99.9,
      thumbnail: 'https://example.com/produto.jpg',
      category: 'groceries',
      rating: 4.5,
      stock: 10,
      brand: 'AgroStore',
    }

    expect(productSchema.safeParse(product).success).toBe(true)
  })

  it('rejeita um produto com preço em texto', () => {
    const product = {
      id: 1,
      title: 'Semente de milho',
      description: 'Semente de milho para plantio',
      price: '99.90',
      thumbnail: 'https://example.com/produto.jpg',
      category: 'groceries',
      rating: 4.5,
      stock: 10,
      brand: 'AgroStore',
    }

    expect(productSchema.safeParse(product).success).toBe(false)
  })
})
