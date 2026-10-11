
import {
  Button,
  Card,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import type { Product } from '../types/Product'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  function handleAddToCart() {
    addToCart(product)

    notifications.show({
      title: 'Produto adicionado!',
      message: `${product.title} foi adicionado ao carrinho.`,
      color: 'green',
      autoClose: 3000,
    })
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={product.thumbnail}
          height={180}
          alt={product.title}
        />
      </Card.Section>

      <Stack mt="md">
        <Title order={3} size="h4">
          {product.title}
        </Title>

        <Text fw={700}>
          R$ {product.price.toFixed(2)}
        </Text>

        <Button onClick={handleAddToCart}>
          Adicionar ao carrinho
        </Button>

        <Button
          component={Link}
          to={`/produtos/${product.id}`}
          variant="light"
        >
          Ver detalhes
        </Button>
      </Stack>
    </Card>
  )
}

export default ProductCard
