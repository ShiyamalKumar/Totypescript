import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonDetails from './pages/PokemonDetails.tsx';
import Home from './pages/Home.tsx';
import { getPokemonData } from './utils/getPokemonData';
import { Pokemon } from './types.tsx';

const App: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pokemonDetails, setPokemonDetails] = useState<any[]>([]);

  useEffect(() => {
    getPokemonData('https://pokeapi.co/api/v2/pokemon?limit=20', setPokemonList, setPokemonDetails);
  }, []);

  console.log(pokemonList);

  return (
    <Router>
     <Routes>
  <Route path="/" element={<Home pokemonList={pokemonList} />} />
  <Route path="/pokemon/:name" element={<PokemonDetails data={pokemonDetails} />} />
</Routes>
    </Router>
  );
};

export default App;


