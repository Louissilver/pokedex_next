import React from 'react';
import styled from 'styled-components';

const MainBase = styled.main`
    flex: 1;
    padding-left: 2%;
    padding-right: 2%;
`;

export default function Main({ children }) {
    return (
        <MainBase>
            {children}
        </MainBase>
    )
}