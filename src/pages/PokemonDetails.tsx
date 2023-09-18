import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { padNumber, capitalizeFirstLetter } from '../utils/helper';
import { Ability, Stat, PokemonDetailsProps } from '../types'

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ data }) => {
  const { name } = useParams < { name: string } > ();
  const [pokemonDetails, setPokemonDetails] = useState < {
    name: string;
    id: number;
    height: number;
    weight: number;
    abilities: Ability[];
    stats: Stat[];
  } | null > (null);

  useEffect(() => {
    const foundPokemon = data.find((item) => item.name === name);
    if (foundPokemon) {
      setPokemonDetails(foundPokemon);
    }
  }, [data, name]);

  if (!pokemonDetails) {
    return <p>Loading...</p>;
  }

  const abilities = pokemonDetails.abilities.map((ability) => (
    <span key={ability.ability.name} className="ability">
      {capitalizeFirstLetter(ability.ability.name)}
    </span>
  ));

  const stats = pokemonDetails.stats.map((stat) => (
    <div key={stat.stat.name} className="stat">
      <p className="stat-label">{capitalizeFirstLetter(stat.stat.name)}:</p>
      <p className="stat-value">{stat.base_stat}</p>
    </div>
  ));

  return (
    <div className="pokemon-details-container">
      <div className="pokemon-details">
        <h2>{capitalizeFirstLetter(pokemonDetails.name)}</h2>
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padNumber(
            pokemonDetails.id,
            3
          )}.png`}
          alt={pokemonDetails.name}
        />
        <div className="details-group">
          <p className="details-label">Height:</p>
          <p className="details-value">{pokemonDetails.height}</p>
        </div>
        <div className="details-group">
          <p className="details-label">Weight:</p>
          <p className="details-value">{pokemonDetails.weight}</p>
        </div>
        <div className="details-group">
          <p className="details-label">Abilities:</p>
          <div className="abilities-list">{abilities}</div>
        </div>
        <div className="details-group">
          <p className="details-label">Base Stats:</p>
          <div className="stats-list">{stats}</div>
        </div>
      </div>
      <div className="back-button">
        <Link to="/" className="link">
          Back to List
        </Link>
      </div>
    </div>
  );
};

export default PokemonDetails;
