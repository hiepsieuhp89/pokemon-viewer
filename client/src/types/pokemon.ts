// Basic Pokemon information from the list endpoint
export interface PokemonListItem {
  name: string;
  url: string;
}

// Pokemon move information
export interface PokemonMove {
  name: string;
  url: string;
}

// Pokemon detail information with all the data we need to display
export interface PokemonWithDetails {
  id: number;
  name: string;
  image: string;
  moves: PokemonMove[];
}

// API response for the Pokemon list endpoint
export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

// API response for the Pokemon detail endpoint
export interface PokemonDetailResponse {
  id: number;
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
}

// Our API response format
export interface PokemonApiResponse {
  pokemons: PokemonWithDetails[];
  totalCount: number;
  totalPages: number;
}
