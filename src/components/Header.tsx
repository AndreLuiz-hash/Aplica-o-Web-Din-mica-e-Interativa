
import { Button, Container, Group, Text } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'

function Header() {
  const { isAuthenticated, logout } = useAuth()
  const { items } = useCart()

const totalItems = items.reduce(
  (total, item) => total + item.quantity,
  0,
)

  return (
    <header>
      <Container size="xl">
        <Group justify="space-between" py="md">
          <Text fw={700} size="xl">
            AgroStore
          </Text>

          <Group>
            <Button
              component={NavLink}
              to="/"
              variant="subtle"
            >
              Início
            </Button>

            <Button
              component={NavLink}
              to="/produtos"
              variant="subtle"
            >
              Produtos
            </Button>

            <Button
            component={NavLink}
            to="/carrinho"
            variant="light"
          >
            🛒 Carrinho ({totalItems})
          </Button>

            {isAuthenticated ? (
              <>
                <Button
                  component={NavLink}
                  to="/admin"
                  variant="subtle"
                >
                  Administração
                </Button>

                <Button
                  variant="default"
                  onClick={logout}
                >
                  Sair
                </Button>
              </>
            ) : (
              <Button
                component={NavLink}
                to="/login"
              >
                Entrar
              </Button>
            )}
          </Group>
        </Group>
      </Container>
    </header>
  )
}

export default Header
