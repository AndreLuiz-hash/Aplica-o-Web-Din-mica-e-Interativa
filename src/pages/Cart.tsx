import {
  Button,
  Container,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { useCart } from '../contexts/CartContext'

function Cart() {
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalItems,
    totalPrice,
  } = useCart()

  if (items.length === 0) {
    return (
      <Container py="xl">
        <Title order={1}>Carrinho</Title>

        <Text mt="md">
          Seu carrinho está vazio.
        </Text>
      </Container>
    )
  }

  return (
    <Container size="lg" py="xl">
      <Title order={1}>
        Carrinho
      </Title>

      <Stack mt="xl">
        {items.map((item) => (
          <Group
            key={item.product.id}
            justify="space-between"
            align="center"
          >
            <Group>
              <Image
                src={item.product.thumbnail}
                alt={item.product.title}
                w={80}
                h={80}
                fit="contain"
              />

              <div>
                <Text fw={600}>
                  {item.product.title}
                </Text>

                <Text>
                  R$ {item.product.price.toFixed(2)}
                </Text>
              </div>
            </Group>

            <Group>
              <Button
                size="sm"
                variant="default"
                onClick={() =>
                  decreaseQuantity(item.product.id)
                }
              >
                −
              </Button>

              <Text fw={600}>
                {item.quantity}
              </Text>

              <Button
                size="sm"
                variant="default"
                onClick={() =>
                  increaseQuantity(item.product.id)
                }
              >
                +
              </Button>

              <Button
                size="sm"
                color="red"
                variant="light"
                onClick={() =>
                  removeFromCart(item.product.id)
                }
              >
                Remover
              </Button>
            </Group>
          </Group>
        ))}
      </Stack>

      <Stack mt="xl">
        <Text fw={600}>
          Quantidade de itens: {totalItems}
        </Text>

        <Title order={2}>
          Total: R$ {totalPrice.toFixed(2)}
        </Title>
      </Stack>
    </Container>
  )
}

export default Cart