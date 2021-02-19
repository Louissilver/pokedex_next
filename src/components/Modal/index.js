import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DetalharPokemon } from '../../repositories/pokemon'
import Loading from '../Loading'

const ModalBase = styled.div`
    width: 100%;
    height: 100%;
    font-family: "Flexo-Medium",arial,sans-serif;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    background-color: rgb(0,0,0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
`;

ModalBase.Container = styled.div`
    background-color: #ffffff;
    width: 80%;
    height: 80%;
    border-radius: 20px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    @media(max-width: 800px) {
        width: 90%;
        height: 90%;
    }
`;

ModalBase.Close = styled.button`
    background-color: ${({ theme }) => theme.colors.primaryDark};
    outline: none;
    display: flex;
    justify-content: center;
    border: none;
    border-radius: 5px;
    width: 24px;
    height: 24px;
    position: relative;
    right: calc(-100% + 30px);
    cursor: pointer;
    display: flex;
    align-items: center;
    &:before, 
    &:after {
        content: ' ';
        position: absolute;
        width: 4px;
        height: 16px;
        background-color: ${({ theme }) => theme.colors.secondary};
    }
    &:before{
        transform: rotate(45deg);
    }
    &:after{
        transform: rotate(-45deg);
    }
`;

ModalBase.Content = styled.div`
overflow:auto;
    display: flex;
    justify-content: start;
    height: 100%;
    @media(max-width: 800px) {
        flex-direction: column;
    }
`;

ModalBase.Header = styled.header`
    display: flex;
    padding: .25rem;;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    h2{
        color: ${({ theme }) => theme.colors.primaryDark};
    }
    @media(max-width: 800px) {
        align-items: center;
        flex-wrap: wrap;
    }
`;

ModalBase.Button = styled.button`
    border-radius: 20px;
    font-weight: bold;
    border-width:1px;
    color: ${({ theme }) => theme.colors.primaryDark};
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 10px;
    font-size: 16px;
    transition: 0.6s;
    width: 50%;
    &:hover,
    &:active{
        cursor: pointer;
        opacity: 0.9;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.secondary};
    }
`;

ModalBase.Footer = styled.footer`
    display: flex;
    justify-content: center;
    padding: 1%;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    @media(max-width: 800px) {
        align-items: center;
        flex-wrap: wrap;
    }
`;

ModalBase.Image = styled.img`
    width: 50%;
    object-fit: contain;
    object-position: center;
    @media(max-width: 800px) {
        width: 100%;
    }
`;

ModalBase.Characteristcs = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    align-items: center;
    padding: 5%;
`;

ModalBase.Infos = styled.ul`
    padding: 1%;
    width: 50%;
    list-style: none;
    text-align: center;
    line-height: 2rem;
    @media(max-width: 800px) {
        width: 100%;
    }
`;

ModalBase.Info = styled.li`
    width: 100%;
    list-style: none;
`;

ModalBase.Types = styled.ul`
    padding: 1%;
    width: 50%;
    list-style: none;
    text-align: center;
    @media(max-width: 800px) {
        width: 100%;
    }
`;

ModalBase.Type = styled.li`
    width: 100%;
    padding: 1rem;
    margin: 5px;
    list-style: none;
    display: inline;
    border: 1px solid black;
    border-radius: 4rem;
`;

export default function Modal({ index, id = "modal", onClose = () => { } }) {
    const [pokemonDetalhado, setPokemonDetalhado] = useState([]);
    const [pokemonTypes, setPokemonTypes] = useState([]);

    const handleOutsideClick = (event) => {
        if (event.target.id === id) {
            onClose();
        }
    }

    useEffect(() => {
        DetalharPokemon(index)
            .then((pokemon) => {
                setPokemonDetalhado(pokemon);
                setPokemonTypes(pokemon.types)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


    return (
        <ModalBase id={id} onClick={handleOutsideClick}>
            <ModalBase.Container>
                <ModalBase.Header>
                    <ModalBase.Close onClick={onClose} />
                    <h2>{`${pokemonDetalhado.name}`}</h2>
                </ModalBase.Header>
                <ModalBase.Content>
                    <ModalBase.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`} />
                    <ModalBase.Characteristcs>
                    <ModalBase.Types>
                        {pokemonTypes.map((type) => {
                        return (
                            <ModalBase.Type key={type.slot}>
                                {type.type.name}
                            </ModalBase.Type>
                        )
                    })}
                    </ModalBase.Types>
                        <ModalBase.Infos>
                            <ModalBase.Info>
                                Number: #{pokemonDetalhado.id}
                            </ModalBase.Info>
                            <ModalBase.Info>
                                Height: {pokemonDetalhado.height/10} m
                            </ModalBase.Info>
                            <ModalBase.Info>
                                Weight: {pokemonDetalhado.weight/10} kg
                            </ModalBase.Info>
                        </ModalBase.Infos>
                    </ModalBase.Characteristcs>
                </ModalBase.Content>
                <ModalBase.Footer>
                    <ModalBase.Button onClick={onClose}>Fechar</ModalBase.Button>
                </ModalBase.Footer>
            </ModalBase.Container>
        </ModalBase>
    );
}