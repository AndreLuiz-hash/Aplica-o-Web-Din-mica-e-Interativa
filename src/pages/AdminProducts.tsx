import { useEffect, useState } from 'react'
import {
  Button,
  Container,
  Group,
  Loader,
  Table,
  Text,
  Title,
} from '@mantine/core'
import { useLocation, useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import type { Product } from '../types/Product'

function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        setError('')

        const response = await api.get('/products', {
          params: {
            limit: 30,
          },
        })

        const productsFromApi: Product[] = response.data.products

        const productFromForm =
          location.state?.product as Product | undefined

        if (productFromForm) {
          const exists = productsFromApi.some(
            (product) => product.id === productFromForm.id,
          )

          if (exists) {
            setProducts(
              productsFromApi.map((product) =>
                product.id === productFromForm.id
                  ? productFromForm
                  : product,
              ),
            )
          } else {
            setProducts([
              productFromForm,
              ...productsFromApi,
            ])
          }

          navigate('/admin/produtos', {
            replace: true,
            state: null,
          })
        } else {
          setProducts(productsFromApi)
        }
      } catch {
        setError('Não foi possível carregar os produtos.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  async function handleDelete(id: number) {
    const confirmed = window.confirm(
      'Tem certeza que deseja excluir este produto?',
    )

    if (!confirmed) {
      return
    }

    try {
      await api.delete(`/products/${id}`)

      setProducts((currentProducts) =>
        currentProducts.filter(
          (product) => product.id !== id,
        ),
      )
    } catch {
      setError('Não foi possível excluir o produto.')
    }
  }

  if (loading) {
    return (
      <Container py="xl">
        <Loader />
      </Container>
    )
  }

  return (
    <Container size="xl" py="xl">
      <Group justify="space-between" mb="xl">
        <Title order={1}>
          Produtos administrativos
        </Title>

        <Button
          onClick={() =>
            navigate('/admin/produtos/novo')
          }
        >
          Novo produto
        </Button>
      </Group>

      {error && (
        <Text c="red" mb="md">
          {error}
        </Text>
      )}

      <Table.ScrollContainer minWidth={700}>
        <Table
          striped
          highlightOnHover
          withTableBorder
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Produto</Table.Th>
              <Table.Th>Categoria</Table.Th>
              <Table.Th>Preço</Table.Th>
              <Table.Th>Estoque</Table.Th>
              <Table.Th>Ações</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {products.map((product) => (
              <Table.Tr key={product.id}>
                <Table.Td>{product.id}</Table.Td>

                <Table.Td>
                  {product.title}
                </Table.Td>

                <Table.Td>
                  {product.category}
                </Table.Td>

                <Table.Td>
                  R$ {product.price.toFixed(2)}
                </Table.Td>

                <Table.Td>
                  {product.stock}
                </Table.Td>

                <Table.Td>
                  <Group gap="xs">
                    <Button
                      size="xs"
                      variant="light"
                      onClick={() =>
                        navigate(
                          `/admin/produtos/editar/${product.id}`,
                        )
                      }
                    >
                      Editar
                    </Button>

                    <Button
                      size="xs"
                      color="red"
                      variant="light"
                      onClick={() =>
                        handleDelete(product.id)
                      }
                    >
                      Excluir
                    </Button>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Container>
  )
}

export default AdminProducts