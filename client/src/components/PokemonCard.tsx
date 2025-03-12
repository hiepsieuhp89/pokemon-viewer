import { PokemonWithDetails } from "@/types/pokemon";
import { Card } from "@/components/ui/card";

// Helper function to get move type color
const getMoveTypeColor = (index: number) => {
  const types = [
    "bg-pokeblue bg-opacity-20 text-pokeblue",
    "bg-pokeyellow bg-opacity-20 text-yellow-700",
    "bg-pokered bg-opacity-20 text-pokered",
    "bg-purple-400 bg-opacity-20 text-purple-700",
    "bg-gray-300 bg-opacity-50 text-gray-700",
    "bg-blue-200 bg-opacity-50 text-blue-700",
  ];
  
  return types[index % types.length];
};

// Format Pokemon ID to show with leading zeros (e.g., #001)
const formatPokemonId = (id: number) => {
  return `#${id.toString().padStart(3, '0')}`;
};

interface PokemonCardProps {
  pokemon: PokemonWithDetails;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Card className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 transition duration-300 hover:translate-y-[-5px] hover:shadow-lg">
      <div className="p-1 bg-gradient-to-r from-pokered to-pokeblue">
        <div className="bg-white rounded-t-lg p-4 flex justify-center">
          <img 
            src={pokemon.image} 
            alt={pokemon.name} 
            className="h-40 w-40 object-contain"
          />
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold text-gray-800 capitalize">{pokemon.name}</h2>
          <span className="text-sm bg-gray-200 px-2 py-1 rounded-full text-gray-700 font-medium">
            {formatPokemonId(pokemon.id)}
          </span>
        </div>
        <div className="mb-4">
          <h3 className="font-medium text-gray-700 mb-2">Moves</h3>
          <div className="flex flex-wrap gap-2">
            {pokemon.moves.slice(0, 2).map((move, index) => (
              <span 
                key={move.name} 
                className={`px-3 py-1 rounded-full text-sm ${getMoveTypeColor(index)}`}
              >
                {move.name.replace('-', ' ')}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
