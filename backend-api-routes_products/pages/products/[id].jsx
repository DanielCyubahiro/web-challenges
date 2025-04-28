import useSWR from 'swr';
import Product from '@/components/Product/Product';
import {useRouter} from 'next/router';

const ProductPage = () => {
  const fetcher = url => fetch(url).then(r => r.json());
  const {id} = useRouter().query;
  const {data: product} = useSWR(
      id ? `/api/products/${id}` : null, // Skip fetch if id is undefined
      fetcher,
      {
        revalidateOnFocus: false, // Disable refetch on tab focus
        dedupingInterval: 10000, // Deduplicate requests for 10 seconds
      },
  );

  // Optional: Show loading state
  if (!product) return <div>Loading...</div>;

  console.log(product); // Logs 2-3 times (dev) or 1-2 times (prod)
  return <Product product={product}/>;
};

export default ProductPage;