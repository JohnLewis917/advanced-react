import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default () => {
    const [pokemon, updatePokemon] = useState([])
    useEffect(
        () => {
            axios
                .get('https://pokeapi.co/api/v2/pokemon')
                .then(res => updatePokemon(res.data.results))
        return () => {}
        }, []
    )
    return(
        <div>
            {JSON.stringify(pokemon)}
        </div>
    )
}