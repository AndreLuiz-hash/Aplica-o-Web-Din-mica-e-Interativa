
import { Button, Container, Stack, Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'

function Admin() {
  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Title order={1}>Painel Administrativo</Title>

        <Text>
          Bem-vindo à área administrativa da AgroStore.
          Escolha uma das opções abaixo para continuar.
        </Text>

        <Button
          component={Link}
          to="/admin/produtos"
          fullWidth
        >
          Gerenciar produtos
        </Button>

        <Button
          component={Link}
          to="/admin/produtos/novo"
          fullWidth
        >
          Cadastrar novo produto
        </Button>

        <Button
          component={Link}
          to="/produtos"
          variant="light"
          fullWidth
        >
          Voltar à loja
        </Button>
      </Stack>
    </Container>
  )
}

export default Admin
