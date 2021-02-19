import React, { useState, useEffect } from 'react';
import Card from '../src/components/Card'
import PageDefault from '../src/components/PageDefault'
import Loading from '../src/components/Loading'
import Modal from '../src/components/Modal'
import { ListarPokemons } from '../src/repositories/pokemon';
import Capitalize from '../src/helpers/Capitalize'
import { useRouter } from 'next/router'

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [index, setIndex] = useState(null);
  

    const router = useRouter();
    const { name } = router.query;

    useEffect(() => {
        ListarPokemons()
            .then((pokemons) => {
                setPokemons(pokemons);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <>
            <PageDefault>
                <Card.Row>
                    {pokemons.length === 0 &&
                        <Loading.Container>
                            <Loading />
                        </Loading.Container>}
                    {JSON.stringify(pokemons).includes(name) === false &&
                        <Loading.Container>
                            Pokémon não encontrado, tente de novo.
                        </Loading.Container>}
                    {pokemons.map((pokemon) => {
                        if (pokemon.pokemon_species.name.includes(name) || name == "" || name == undefined) {
                            return (

                                <Card key={pokemon.entry_number} onClick={() => {
                                    setModalVisible(true)
                                    setIndex(pokemon.entry_number)
                                }}>
                                    <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`} />
                                    <Card.Number>#{pokemon.entry_number}</Card.Number>
                                    <Card.Pokemon>{`${Capitalize(pokemon.pokemon_species.name)}`}</Card.Pokemon>
                                    <Card.Button onClick={() => {
                                        setModalVisible(true)
                                        setIndex(pokemon.entry_number)
                                        console.log(pokemon.entry_number)
                                    }}>Ver mais</Card.Button>
                                </Card>
                            )
                        }
                    })}
                    {modalVisible &&
                        <Modal id={"saibaMais"} onClose={() => { setModalVisible(false); }} index={index} />}
                </Card.Row>
            </PageDefault>
        </>
    )
}
