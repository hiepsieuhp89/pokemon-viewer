import { PokemonWithDetails } from "@/types/pokemon";
import PokemonCard from "./PokemonCard";

interface PokemonGridProps {
  pokemons: PokemonWithDetails[];
}

export default function PokemonGrid({ pokemons }: PokemonGridProps) {
  return (
    <div className="relative">
      {/* Background magical elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-pokeblue/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-pokered/5 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-pokeyellow/5 blur-3xl"></div>
      </div>
      
      {/* Pokemon grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {pokemons.map((pokemon, index) => (
          <div 
            key={pokemon.id} 
            className="transform transition-all duration-700 ease-out"
            style={{ 
              animationDelay: `${index * 0.05}s`,
              transform: `translateY(0)` 
            }}
          >
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
}
