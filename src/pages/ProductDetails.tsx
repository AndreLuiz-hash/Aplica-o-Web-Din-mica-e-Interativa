import { useEffect, useState } from 'react'
import { Container, Image, Loader, Text, Title } from '@mantine/core'
import { useParams } from 'react-router-dom'
import { api } from '../services/api'
import { productSchema } from '../schemas/ProductSchema'
import type { Product } from '../types/Product'

function ProductDetails() {
  const { id } = useParams()

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true)
        setError('')

        const response = await api.get(`/products/${id}`)

        const result = productSchema.safeParse(response.data)

        if (!result.success) {
          throw new Error('Dados do produto inválidos.')
        }

        setProduct(result.data)
      } catch {
        setError('Não foi possível carregar o produto.')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return (
      <Container py="xl">
        <Loader />
      </Container>
    )
  }

  if (error) {
    return (
      <Container py="xl">
        <Text c="red">{error}</Text>
      </Container>
    )
  }

  if (!product) {
    return (
      <Container py="xl">
        <Text>Produto não encontrado.</Text>
      </Container>
    )
  }

  return (
    <Container size="md" py="xl">
      <Title order={1}>{product.title}</Title>

      <Image
        src={product.thumbnail}
        alt={product.title}
        h={300}
        fit="contain"
        mt="lg"
      />

      <Text mt="lg">
        {product.description}
      </Text>

      <Text fw={700} size="xl" mt="md">
        R$ {product.price.toFixed(2)}
      </Text>

      <Text mt="sm">
        Categoria: {product.category}
      </Text>

      <Text mt="sm">
        Estoque: {product.stock}
      </Text>

      <Text mt="sm">
        Avaliação: {product.rating}
      </Text>
    </Container>
  )
}

export default ProductDetails