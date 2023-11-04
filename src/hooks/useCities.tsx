import { useEffect, useState } from 'react';

export default function useCities() {
  const [cities, setCities] = useState([]);

  async function fetchCities() {
    const response = await fetch(import.meta.env.VITE_API_URL + '/city');
    const data = await response.json();
    if (data) setCities(data);
  }

  useEffect(() => {
    fetchCities();
  }, []);

  return {
    cities,
    fetchCities,
  };
}
