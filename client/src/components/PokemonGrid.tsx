import { PokemonWithDetails } from "@/types/pokemon";
import PokemonCard from "./PokemonCard";

interface PokemonGridProps {
  pokemons: PokemonWithDetails[];
}

export default function PokemonGrid({ pokemons }: PokemonGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
