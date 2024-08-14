const apiKey = import.meta.env.VITE_BIG_DATA_CLOUD;

export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://api-bdc.net/data/reverse-geocode?latitude=-34.93129&longitude=138.59669&localityLanguage=en&key=${apiKey}`,
  );
  if (!res.ok) throw Error('Failed getting address');

  const data = await res.json();
  return data;
}
