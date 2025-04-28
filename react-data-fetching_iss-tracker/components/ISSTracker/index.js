import Controls from '../Controls/index';
import Map from '../Map/index';
import useSWR from 'swr';

const URL = 'https://api.wheretheiss.at/v1/satellites/25544';

export default function ISSTracker() {
  const fetcher = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const {data, isLoading, error, mutate} = useSWR(
      URL,
      fetcher,
      {
        refreshInterval: 5000,
      },
  );
  let coords = {longitude: data?.longitude, latitude: data?.latitude};

  if (isLoading) {
    return <p style={{
      fontSize: '40px',
      display: 'flex',
      justifyContent: 'center',
    }}>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
      <main>
        <Map longitude={coords.longitude} latitude={coords.latitude}/>
        <Controls
            longitude={coords.longitude}
            latitude={coords.latitude}
            onRefresh={() => mutate()}
        />
      </main>
  );
}
