  export interface User {
    username: string;
    email: string;
  }
  export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    abilities: Ability[];
    stats: Stat[];
    url:string;
  }
  
  export interface Ability {
    ability: {
      name: string;
    };
   
  }
  
  export interface Stat {
    stat: {
      name: string;
    };
    base_stat: number;
    
  }
  
  export interface PokemonDetailsProps {
    data: {
      name: string;
      id: number;
      height: number;
      weight: number;
      abilities: Ability[];
      stats: Stat[];
    }[];
  }
  export interface PokemonDetails {
    name: string;
    id: number;
    height: number;
    weight: number;
    abilities: Ability[];
    stats: Stat[];
   
  }