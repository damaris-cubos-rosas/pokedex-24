import { useEffect, useState } from "react"

export default function PokemonCard(props) {
    const [pokemon, setPokemon] = useState({});
    useEffect(() => {
        fetch(props.url)
        .then((res) => res.json())
        .then((res) => {
            setPokemon(res);
        })
    }, [])

    return (
        <article className="bg-stone-700 p-6 flex flex-col gap-4 w-rull rounded-md">
            {!pokemon && "Cargando..."}
            <img src={pokemon?.sprites?.front_default} alt={pokemon.name} />
            <p className="text-white font-semibold text-lg text-center">{pokemon.name}</p>
        </article>
    )
}