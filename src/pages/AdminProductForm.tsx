
import { useEffect, useState } from 'react'
import {
  Button,
  Container,
  Loader,
  NumberInput,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { zodResolver } from 'mantine-form-zod-resolver'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../services/api'
import {
  productFormSchema,
  type ProductFormValues,
} from '../schemas/ProductFormSchema'
import type { Product } from '../types/Product'

function AdminProductForm() {
  const navigate = useNavigate()
  const { id } = useParams()
  const isEditing = Boolean(id)

  const [loadingProduct, setLoadingProduct] = useState(isEditing)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const form = useForm<ProductFormValues>({
    mode: 'controlled',
    initialValues: {
      title: '',
      description: '',
      price: 0,
      category: '',
      stock: 0,
    },
    validate: zodResolver(productFormSchema),
    validateInputOnBlur: true,
  })

  useEffect(() => {
    if (!id) {
      setLoadingProduct(false)
      return
    }

    let active = true

    async function fetchProduct() {
      try {
        setLoadingProduct(true)
        setError('')

        const response = await api.get<Product>(`/products/${id}`)

        if (!active) return

        const product = response.data

        form.setValues({
          title: product.title,
          description: product.description,
          price: product.price,
          category: product.category,
          stock: product.stock,
        })
      } catch (error) {
        if (active) {
          setError(
            error instanceof Error
              ? error.message
              : 'Não foi possível carregar o produto.',
          )
        }
      } finally {
        if (active) {
          setLoadingProduct(false)
        }
      }
    }

    void fetchProduct()

    return () => {
      active = false
    }
  }, [id])

  async function handleSubmit(values: ProductFormValues) {
    setError('')

    const result = productFormSchema.safeParse(values)

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors

      form.setErrors({
        title: errors.title?.[0] ?? null,
        description: errors.description?.[0] ?? null,
        price: errors.price?.[0] ?? null,
        category: errors.category?.[0] ?? null,
        stock: errors.stock?.[0] ?? null,
      })

      return
    }

    try {
      setLoading(true)

      const response = id
        ? await api.put<Product>(`/products/${id}`, result.data)
        : await api.post<Product>('/products/add', result.data)

      navigate('/admin/produtos', {
        state: {
          product: response.data,
        },
      })
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : isEditing
            ? 'Não foi possível atualizar o produto.'
            : 'Não foi possível criar o produto.',
      )
    } finally {
      setLoading(false)
    }
  }

  if (loadingProduct) {
    return (
      <Container py="xl">
        <Loader />
        <Text mt="md">Carregando produto...</Text>
      </Container>
    )
  }

  return (
    <Container size="sm" py="xl">
      <Title order={1} mb="xl">
        {isEditing ? 'Editar produto' : 'Novo produto'}
      </Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Nome do produto"
            placeholder="Ex.: Semente de milho"
            withAsterisk
            {...form.getInputProps('title')}
          />

          <Textarea
            label="Descrição"
            placeholder="Descreva o produto"
            minRows={4}
            withAsterisk
            {...form.getInputProps('description')}
          />

          <NumberInput
            label="Preço"
            placeholder="0,00"
            min={0}
            decimalScale={2}
            withAsterisk
            {...form.getInputProps('price')}
          />

          <Select
            label="Categoria"
            placeholder="Selecione uma categoria"
            withAsterisk
            data={[
              { value: 'beauty', label: 'Beleza' },
              { value: 'fragrances', label: 'Fragrâncias' },
              { value: 'furniture', label: 'Móveis' },
              { value: 'groceries', label: 'Mercado' },
              { value: 'laptops', label: 'Notebooks' },
              {
                value: 'mens-shirts',
                label: 'Camisetas masculinas',
              },
              {
                value: 'mens-shoes',
                label: 'Calçados masculinos',
              },
              { value: 'motorcycle', label: 'Motocicletas' },
              { value: 'smartphones', label: 'Smartphones' },
              {
                value: 'sports-accessories',
                label: 'Acessórios esportivos',
              },
              { value: 'vehicle', label: 'Veículos' },
            ]}
            {...form.getInputProps('category')}
          />

          <NumberInput
            label="Estoque"
            placeholder="0"
            min={0}
            allowDecimal={false}
            withAsterisk
            {...form.getInputProps('stock')}
          />

          {error && (
            <Text c="red" role="alert">
              {error}
            </Text>
          )}

          <Button type="submit" loading={loading}>
            {isEditing ? 'Salvar alterações' : 'Criar produto'}
          </Button>

          <Button
            type="button"
            variant="default"
            disabled={loading}
            onClick={() => navigate('/admin/produtos')}
          >
            Cancelar
          </Button>
        </Stack>
      </form>
    </Container>
  )
}

export default AdminProductForm
