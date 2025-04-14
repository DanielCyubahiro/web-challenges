import Card from '../../components/Card';
import Layout from '../../components/Layout';
import useSWR from 'swr';
import {useRouter} from 'next/router';

export default function Character() {
  const router = useRouter();
  const {id} = router.query;
  const fetcher = async (url, id) => {
    try {
      const response = await fetch(`${url}${id}/`);
      if (!response.ok) {
        const error = new Error('An error occurred while fetching the data.');
        // Attach extra info to the error object.
        error.info = await response.json();
        error.status = response.status;
        throw error;
      }
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const {data, isLoading, error} = useSWR(
      ['https://swapi.py4e.com/api/people/', id ?? 1],
      ([url, id]) => fetcher(url, id));

  if (isLoading) return <Layout>Loading...</Layout>;
  if (error) return <Layout>Error: {error.info?.detail || error.message}</Layout>;
  if (!data) return <Layout>No character found</Layout>;
  return (
      <Layout>
        {!isLoading
            ? (
                <Card
                    id={id}
                    name={data?.name}
                    height={data.height}
                    eyeColor={data?.eye_color}
                    birthYear={data?.birth_year}
                />
            )
            : (
                <p>
                  Loading character
                </p>
            )
        }
      </Layout>
  );
}
