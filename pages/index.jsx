import PokemonCard from "@/components/pokemon-card";
import { useEffect, useState } from "react";

export default function Home() {
  const [ pokemonList, setPokemonList ] = useState([])

  useEffect(() => { //Del lado del cliente
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then((res) => res.json())
    .then((res) => {
      setPokemonList(res.results);
    })
  }, [])

  return (
    <>
      <header className="p-10">
        <img
          className="mx-auto"
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="logo" />
      </header>
      <section className="grid grid-cols-2 md:grid-cols-6 gap-5 p-10"> 
        {
          pokemonList.map((pokemon) => {
            return <PokemonCard key={pokemon.url} url={pokemon.url}/>
          })
        }
      </section>
    </>
  )
}

