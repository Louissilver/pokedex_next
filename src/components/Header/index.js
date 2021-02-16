import React from 'react';
import styled from 'styled-components';

const HeaderBase = styled.header`
    padding: 0;
    margin: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

HeaderBase.Search = styled.div`
    margin: 0;
    padding: 0;
    width:25%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
`;

HeaderBase.Input = styled.input`
    padding: 8px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
`;

HeaderBase.Button = styled.button`
    padding: 8px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    &:hover{
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.primaryDark};
        border: 2px solid ${({ theme }) => theme.colors.primaryDark};
    }
`;

HeaderBase.Logo = styled.a`
    &:hover{
        cursor: pointer;
    }
`;

HeaderBase.Image = styled.img`
   width: 8rem; 
`;

HeaderBase.Nav = styled.nav`
    width:25%;
    padding: 0;
    display: flex;
`;

HeaderBase.Link = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    font-family: sans-serif;
    font-weight: bold;
    border-style: none;
    display: block;
    padding: 1rem;
    &:hover{
        background-color: ${({ theme }) => theme.colors.secondaryDark};
    }
`;

export default function Header() {
    return (
        <HeaderBase>
            <HeaderBase.Nav>
                <HeaderBase.Link>
                    Home
                </HeaderBase.Link>
                <HeaderBase.Link>
                    About
                </HeaderBase.Link>
                <HeaderBase.Link>
                    Contact
                </HeaderBase.Link>
            </HeaderBase.Nav>
            <HeaderBase.Logo href="#">
                <HeaderBase.Image src='https://fontmeme.com/permalink/210216/84f1943cbd05e36bb90d12663346a34b.png' />
            </HeaderBase.Logo>
            <HeaderBase.Search>
            <HeaderBase.Input type="text" placeholder="Search..." />
            <HeaderBase.Button>
                Pesquisar
            </HeaderBase.Button>
            </HeaderBase.Search>
        </HeaderBase>
    )
}