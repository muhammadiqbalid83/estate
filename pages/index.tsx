import { customFetch } from '@/utils/fetchApi'
import { GetStaticProps } from 'next'

const urlSale =
  '/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6'

const urlRent =
  '/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6'

type Product = {
  id: number
  title: string
  // Tambahkan tipe data untuk atribut produk lainnya di sini
}

type HomeProps = {
  products: Product[]
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await customFetch(urlSale)
  console.log(response.data.hits)

  const products: Product[] = response.data.hits

  return {
    props: {
      products,
    },
  }
}

export default function Home({ products }: HomeProps) {
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
        </div>
      ))}
    </>
  )
}
