import useSWR from 'swr';
import Product from '@/components/Product/Product';

const ProductsPage = () => {

  const fetcher = url => fetch(url).then(r => r.json());
  const {data, isLoading} = useSWR(`/api/products`, fetcher);

  if (isLoading) return <div>Loading...</div>;

  return data.map((product) => <Product key={product.id} product={product}/>);
};

export default ProductsPage;