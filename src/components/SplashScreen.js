import React from 'react';
import CrookedDie from './CrookedDie';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SplashSection = styled.section`
    text-align: center;
    padding: 45px 0 15px;
`;

const SplashScreen = () => {
    return (
        <React.Fragment>
            <SplashSection>
                <CrookedDie/>
            </SplashSection>
            <SplashSection>
                <div className="user-options">
                    <Link to={'/game'}><button type="button">PLAY</button></Link>
                    <Link to={'/rules'}><button type="button">RULES</button></Link>
                </div>
            </SplashSection>
        </React.Fragment>
    );
};

export default SplashScreen;