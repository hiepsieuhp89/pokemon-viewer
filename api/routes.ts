import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import axios from 'axios';

// PokeAPI base URL
const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to get Pokemon with pagination
  app.get('/api/pokemons', async (req, res) => {
    try {
      // Get query parameters for pagination
      const limit = Number(req.query.limit) || 12;
      const offset = Number(req.query.offset) || 0;

      // Fetch the Pokemon list from PokeAPI
      const listResponse = await axios.get(`${POKEAPI_BASE_URL}/pokemon`, {
        params: { limit, offset }
      });

      const { results, count } = listResponse.data;

      // Fetch detailed information for each Pokemon in parallel
      const pokemonDetailsPromises = results.map(async (pokemon: { name: string, url: string }) => {
        const detailResponse = await axios.get(pokemon.url);
        const { id, name, sprites, moves } = detailResponse.data;
        
        return {
          id,
          name,
          image: sprites.other['official-artwork'].front_default,
          moves: moves.slice(0, 5).map((m: any) => ({
            name: m.move.name,
            url: m.move.url
          }))
        };
      });

      // Wait for all Pokemon details to be fetched
      const pokemons = await Promise.all(pokemonDetailsPromises);

      // Calculate total pages
      const totalPages = Math.ceil(count / limit);

      // Return the Pokemon data with pagination info
      res.json({
        pokemons,
        totalCount: count,
        totalPages
      });
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
      res.status(500).json({
        message: 'Failed to fetch Pokemon data from PokeAPI'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
