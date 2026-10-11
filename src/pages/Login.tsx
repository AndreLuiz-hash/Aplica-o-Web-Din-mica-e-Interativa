import { useState } from 'react'
import {
  Button,
  Container,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { useAuth } from '../contexts/AuthContext'

function Login() {
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  async function handleLogin() {
    try {
      setLoading(true)
      setError('')
      setSuccess('')

      await login(username, password)

      setSuccess('Login realizado com sucesso!')
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('Não foi possível realizar o login.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container size="sm" py="xl">
      <Title order={1}>Login</Title>

      <TextInput
        label="Usuário"
        placeholder="Digite seu usuário"
        value={username}
        onChange={(event) => setUsername(event.currentTarget.value)}
        mt="lg"
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
        mt="md"
      />

      <Button
        fullWidth
        mt="xl"
        onClick={handleLogin}
        loading={loading}
      >
        Entrar
      </Button>

      {error && (
        <Text c="red" mt="md">
          {error}
        </Text>
      )}

      {success && (
        <Text c="green" mt="md">
          {success}
        </Text>
      )}
    </Container>
  )
}

export default Login