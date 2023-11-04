import { useEffect, useState } from 'react';

export default function useCountries() {
  const [countries, setCountries] = useState([]);

  async function fetchCountries() {
    const response = await fetch(import.meta.env.VITE_API_URL + '/country');
    const data = await response.json();
    if (data) setCountries(data);
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  return {
    countries,
    fetchCountries,
  };
}
