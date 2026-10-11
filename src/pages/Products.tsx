import { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Loader,
  Pagination,
  Select,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { api } from "../services/api";
import ProductCard from "../components/ProductCard";
import type { Product } from "../types/Product";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const productsPerPage = 12;

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");

        const skip = (page - 1) * productsPerPage;

        let endpoint = "/products";

        if (search) {
          endpoint = "/products/search";
        } else if (category) {
          endpoint = `/products/category/${category}`;
        }

        const response = await api.get(endpoint, {
          params: {
            limit: productsPerPage,
            skip,
            ...(search && { q: search }),
          },
        });

        setProducts(response.data.products);
        setTotal(response.data.total);
      } catch {
        setError("Não foi possível carregar os produtos.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [page, search, category]);

  return (
    <Container size="xl" py="xl">
      <Title order={1}>Produtos</Title>

      <TextInput
        placeholder="Buscar produto..."
        value={search}
        onChange={(event) => {
          setSearch(event.currentTarget.value);
          setPage(1);
        }}
        mt="md"
      />

      <Select
        label="Categoria"
        placeholder="Todas as categorias"
        clearable
        data={[
          { value: "beauty", label: "Beleza" },
          { value: "fragrances", label: "Fragrâncias" },
          { value: "furniture", label: "Móveis" },
          { value: "groceries", label: "Mercado" },
          { value: "laptops", label: "Notebooks" },
          { value: "mens-shirts", label: "Camisetas masculinas" },
          { value: "mens-shoes", label: "Calçados masculinos" },
          { value: "motorcycle", label: "Motocicletas" },
          { value: "smartphones", label: "Smartphones" },
          { value: "sports-accessories", label: "Acessórios esportivos" },
          { value: "vehicle", label: "Veículos" },
        ]}
        value={category}
        onChange={(value) => {
          setCategory(value);
          setPage(1);
        }}
        mt="md"
      />

      {loading && <Loader mt="md" />}

      {error && (
        <Text c="red" mt="md">
          {error}
        </Text>
      )}

      {!loading && !error && (
        <>
          <Grid mt="md">
            {products.map((product) => (
              <Grid.Col
                key={product.id}
                span={{ base: 12, sm: 6, md: 4, lg: 3 }}
              >
                <ProductCard product={product} />
              </Grid.Col>
            ))}
          </Grid>

          <Pagination
            value={page}
            onChange={setPage}
            total={Math.ceil(total / productsPerPage)}
            mt="xl"
          />
        </>
      )}
    </Container>
  );
}
export default Products;
