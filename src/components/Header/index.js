import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const HeaderBase = styled.header`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    padding: 1rem;
    width: 100%;
    @media screen and (min-width: 768px){
        flex-direction: row;
        padding: .25rem;
        position: sticky;
        top: 0;
    }
`;

HeaderBase.Search = styled.div`
    align-items: center;
    display: flex;
    font-size: 1rem;
    justify-content: center;
    margin: 0;
    order: 3;
    padding: 0;
    width: 100%;
    @media screen and (min-width: 768px){
        width: 25%;
    }
`;

HeaderBase.Input = styled.input`
    border: 2px solid ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    padding: .5rem;
    width: 75%;
    &:focus{
        border: 2px solid ${({ theme }) => theme.colors.primaryDark};
        outline: 2px solid ${({ theme }) => theme.colors.secondaryDark};
    }
    @media screen and (min-width: 768px){
        font-size: 1rem;
    }
`;

HeaderBase.Button = styled.button`
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.5rem;
    font-weight: bold;
    padding: .5rem;
    width: 25%;
    &:hover{
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.primaryDark};
        border: 2px solid ${({ theme }) => theme.colors.primaryDark};
    }
    @media screen and (min-width: 768px){
        font-size: 1rem;
    }
`;

HeaderBase.Logo = styled.a`
    order: 1;
    &:hover{
        cursor: pointer;
    }
    @media screen and (min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
        margin: 0;
        order: 2;
    }
`;

HeaderBase.Image = styled.img`
   width: 16rem; 
   @media screen and (min-width: 768px){
    width: 8rem;     
    }
`;

HeaderBase.Nav = styled.nav`
    padding: 0;
    margin: 1.5rem;
    display: flex;
    flex-direction: column;
    order: 2;
    width:100%;
    @media screen and (min-width: 768px){
        flex-direction: row;
        margin: 0;
        order: 1;
        width:25%;
    }
`;

HeaderBase.Link = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    display: inline-block;
    font-family: sans-serif;
    font-size: 1.5rem;
    padding: 1em;
    text-align: center;
    text-decoration: none;
    width: 100%;
    &:hover{
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.secondaryDark};
    }
    @media screen and (min-width: 768px){
        flex-direction: row;
        font-size: 1rem;
        justify-content: space-between;
        padding: .5em;
        width: auto;
    }
    @media screen and (min-width: 1024px){
        padding: 1em;
    }
    @media screen and (min-width: 1349px){
        padding: 1.5em;
    }
`;

export default function Header() {
    const router = useRouter();
    const [name, setName] = useState('');
    return (
        <HeaderBase>
            <HeaderBase.Nav>
                <HeaderBase.Link onClick={(event) => {
                    event.preventDefault();
                    router.push(`/`)
                }}>
                    Home
                </HeaderBase.Link>
                <HeaderBase.Link onClick={(event) => {
                    event.preventDefault();
                    router.push(`/pokemons`)
                }}>
                    Pokemóns
                </HeaderBase.Link>
            </HeaderBase.Nav>
            <HeaderBase.Logo href="#" onClick={(event) => {
                    event.preventDefault();
                    router.push(`/`)
                }}>
                <HeaderBase.Image src='https://fontmeme.com/permalink/210216/84f1943cbd05e36bb90d12663346a34b.png' />
            </HeaderBase.Logo>
            <HeaderBase.Search>
                <HeaderBase.Input
                    type="text"
                    placeholder="Search pokémons..."
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                    onKeyDown={(event) => {
                        var tecla = event.keyCode;
                        if (tecla == 13) {
                            router.push(`/pokemons?name=${name}`)
                        }
                    }}
                    name="name"
                    value={name} />
                <HeaderBase.Button onClick={(event) => {
                    event.preventDefault();
                    router.push(`/pokemons?name=${name}`)
                }}> GO
                </HeaderBase.Button>
            </HeaderBase.Search>
        </HeaderBase>
    )
}