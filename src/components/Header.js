import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderSection = styled.header`
    background-color: #006400;
`;

const HeaderText = styled.h1`
    text-align: center;
    font-style: italic;
    font-size: 36px;
`;

const Header = () => {
    return (
        <HeaderSection>
            <HeaderText><Link to={'/'} style={{color: '#FFF'}}>YAHTZEE</Link></HeaderText>
        </HeaderSection>
    );
};

export default Header;