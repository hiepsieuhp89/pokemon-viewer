import Header from "@/components/Header";
import PokemonGrid from "@/components/PokemonGrid";
import Pagination from "@/components/Pagination";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { usePokemons } from "@/hooks/usePokemons";

export default function Home() {
  const { 
    pokemons, 
    isLoading, 
    isError, 
    error, 
    page, 
    totalPages, 
    setPage, 
    retryFetch 
  } = usePokemons();

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />

      {isLoading && (
        <div className="flex flex-col items-center justify-center h-64">
          <div className="h-12 w-12 rounded-full border-4 border-t-pokeblue border-gray-200 animate-spin mb-4"></div>
          <h2 className="text-center text-gray-600 text-xl font-semibold">Loading Pokémon...</h2>
        </div>
      )}

      {isError && (
        <Alert variant="destructive" className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Failed to load Pokémon data: {error?.message || "Unknown error"}
            <button 
              onClick={retryFetch}
              className="mt-2 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded transition duration-200"
            >
              Try Again
            </button>
          </AlertDescription>
        </Alert>
      )}

      {!isLoading && !isError && pokemons && pokemons.length > 0 && (
        <>
          <PokemonGrid pokemons={pokemons} />
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}
