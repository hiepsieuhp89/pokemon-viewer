import { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { PokemonWithDetails } from '@/types/pokemon';

// Number of Pokemon to fetch per page
const LIMIT = 12;

export function usePokemons() {
  const [page, setPage] = useState(1);
  
  // Calculate the offset based on the current page
  const offset = (page - 1) * LIMIT;
  
  // This query fetches the list of Pokemon with pagination
  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ['/api/pokemons', offset, LIMIT],
    refetchOnWindowFocus: false,
  });

  // Function to retry fetching data
  const retryFetch = useCallback(() => {
    refetch();
  }, [refetch]);

  // The total number of pages based on the total count from the API
  const totalPages = data?.totalPages || 1;
  
  // The list of Pokemon with their details
  const pokemons: PokemonWithDetails[] = data?.pokemons || [];

  return {
    pokemons,
    isLoading,
    isError,
    error,
    page,
    totalPages,
    setPage,
    retryFetch
  };
}
