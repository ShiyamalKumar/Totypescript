import React from 'react';
import CardList from '../components/CardList';
import { Pokemon } from '../types';

interface HomeProps {
  pokemonList: Pokemon[];
}

const Home: React.FC<HomeProps> = ({ pokemonList }) => {
  return <CardList pokemonList={pokemonList} />;
};

export default Home;
