export interface abilities {
  id: number;
  name: string;
  pokemon_id: number;
}

export interface Pokemon {
  id: number;
  against_bug: number;
  against_dark: number;
  against_dragon: number;
  against_electric: number;
  against_fairy: number;
  against_fight: number;
  against_fire: number;
  against_flying: number;
  against_ghost: number;
  against_grass: number;
  against_ground: number;
  against_ice: number;
  against_normal: number;
  against_poison: number;
  against_psychic: number;
  against_rock: number;
  against_steel: number;
  against_water: number;
  attack: number;
  base_egg_steps: number;
  base_happiness: number;
  base_total: number;
  capture_rate: number;
  classification: string;
  defense: number;
  experience_growth: number;
  height_m: number;
  hp: number;
  japanese_name: string;
  name: string;
  percentage_male: number;
  pokedex_number: number;
  sp_attack: number;
  sp_defense: number;
  speed: number;
  type1: string;
  type2: string;
  weight_kg: number;
  generation: number;
  is_legendary: boolean;
  image: string | null;
  abilities: abilities[];
}

export interface PaginatedPokemonProps {
  pokemons: Pokemon[];
  currentPage: number;
  totalPage: number;
}

export interface PokemonHeightFilter {
  operator: string;
  valueOfPokemonHeight: number | null;
}

export interface PokemonWeightFilter {
  operator: string;
  valueOfPokemonWeight: number | null;
}
