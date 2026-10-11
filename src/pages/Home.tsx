import { Title, Text, Container } from '@mantine/core'

function Home() {
  return (
    <Container py="xl">
      <Title order={1}>Bem-vindo à AgroStore</Title>

      <Text mt="md">
        Encontre os melhores produtos para você.
      </Text>
    </Container>
  )
}

export default Home