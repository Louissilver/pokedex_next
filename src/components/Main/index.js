import React from 'react';
import styled from 'styled-components';

const MainBase = styled.main`
    flex: 1;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
`;

export default function Main({ children }) {
    return (
        <MainBase>
            {children}
        </MainBase>
    )
}