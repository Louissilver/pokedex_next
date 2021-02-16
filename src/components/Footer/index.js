import React from 'react';
import styled from 'styled-components';

const FooterBase = styled.footer`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primaryDark};
    font-size: 1.5rem;
    margin: 0;
    padding: 2rem;
    text-align: center;
    width: 100%;
    @media screen and (min-width: 768px){
        padding: .25rem;
        font-size: 1rem;
    }
`;

FooterBase.Text = styled.p`
    color: ${({ theme }) => theme.colors.secondary};
    font-family: sans-serif;
`;

FooterBase.Link = styled.a`
    color: ${({ theme }) => theme.colors.secondary};
    font-family: sans-serif;
    @media screen and (min-width: 768px){
        &:hover{
            color: white;
            cursor: pointer;
        }
    }
`;

export default function Footer() {
    return (
        <FooterBase>
            <FooterBase.Text>
                &copy; 2021 | @Louissilver
            </FooterBase.Text>
            <FooterBase.Link href="#">
                Conheça outros projetos!
            </FooterBase.Link>
        </FooterBase>
    )
}