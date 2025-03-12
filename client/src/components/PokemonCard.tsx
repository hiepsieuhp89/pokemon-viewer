import { useState } from "react";
import { PokemonWithDetails } from "@/types/pokemon";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Helper function to get move type color
const getMoveTypeColor = (index: number) => {
  const types = [
    "bg-pokeblue/10 text-pokeblue border-pokeblue/30 hover:bg-pokeblue/20",
    "bg-pokeyellow/10 text-yellow-700 border-pokeyellow/30 hover:bg-pokeyellow/20",
    "bg-pokered/10 text-pokered border-pokered/30 hover:bg-pokered/20",
    "bg-purple-400/10 text-purple-700 border-purple-400/30 hover:bg-purple-400/20",
    "bg-emerald-500/10 text-emerald-700 border-emerald-500/30 hover:bg-emerald-500/20",
    "bg-pink-400/10 text-pink-700 border-pink-400/30 hover:bg-pink-400/20",
  ];
  
  return types[index % types.length];
};

// Format Pokemon ID to show with leading zeros (e.g., #001)
const formatPokemonId = (id: number) => {
  return `#${id.toString().padStart(3, '0')}`;
};

// Get Pokemon accent color
const getPokemonAccentColor = (id: number) => {
  const colors = [
    "from-pokered to-pink-500",
    "from-pokeblue to-sky-400",
    "from-pokeyellow to-amber-400",
    "from-emerald-600 to-emerald-400",
    "from-purple-600 to-purple-400",
    "from-indigo-600 to-indigo-400",
  ];
  
  return colors[id % colors.length];
};

// Get animation delay
const getAnimationDelay = (id: number) => {
  return `${(id % 5) * 0.1}s`;
};

interface PokemonCardProps {
  pokemon: PokemonWithDetails;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const accentGradient = getPokemonAccentColor(pokemon.id);
  const animationDelay = getAnimationDelay(pokemon.id);
  
  return (
    <Card 
      className="relative rounded-xl overflow-hidden shadow-lg border backdrop-blur-sm bg-white/80 
        transition-all duration-500 hover:shadow-2xl group pokeball-bg"
      style={{ animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Magical corner effect */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/90 to-transparent rounded-bl-full opacity-50 -z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.2)_100%)] pointer-events-none"></div>
      
      {/* Card header with image */}
      <div className={`p-3 bg-gradient-to-r ${accentGradient} transition-all duration-500`}>
        <div className="bg-white/90 backdrop-blur rounded-lg p-5 flex justify-center items-center">
          <div className="relative">
            {/* Image background glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${accentGradient} rounded-full blur-xl opacity-30 
              transform scale-90 transition-all duration-500 ${isHovered ? 'scale-110 opacity-50' : 'scale-90'}`}></div>
            
            {/* Pokemon image */}
            <img 
              src={pokemon.image} 
              alt={pokemon.name} 
              className={`h-40 w-40 object-contain z-10 relative 
                transition-all duration-500 drop-shadow-lg
                ${isHovered ? 'scale-110 animate-[float_3s_ease-in-out_infinite]' : 'scale-100'}`}
            />
          </div>
        </div>
      </div>
      
      {/* Card content */}
      <div className="p-6 relative">
        {/* Pokemon name and ID */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold text-pokedark capitalize group-hover:text-transparent bg-clip-text bg-gradient-to-r from-pokedark to-pokeblue transition-all duration-300">
            {pokemon.name}
          </h2>
          <Badge className={`bg-gradient-to-r ${accentGradient} text-white font-semibold 
            transform transition-all duration-300 px-3 py-1 h-auto ${isHovered ? 'scale-110' : ''}`}>
            {formatPokemonId(pokemon.id)}
          </Badge>
        </div>
        
        {/* Moves section */}
        <div>
          <h3 className="font-semibold text-pokedark/80 mb-3 flex items-center">
            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${accentGradient} mr-2 
              transition-all duration-300 ${isHovered ? 'scale-150' : ''}`}></span>
            Special Moves
          </h3>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {pokemon.moves.slice(0, 3).map((move, index) => (
              <span 
                key={move.name} 
                className={`px-3 py-1.5 rounded-full text-sm border 
                  ${getMoveTypeColor(index)} font-medium capitalize
                  transition-all duration-300 hover:scale-105 cursor-pointer`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                {move.name.replace(/-/g, ' ')}
              </span>
            ))}
          </div>
        </div>
        
        {/* Magic sparkle effect when hovered */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none transition-opacity duration-700 opacity-0 
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 left-2/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-[pulse_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </Card>
  );
}
