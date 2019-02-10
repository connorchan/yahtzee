import React from 'react';
import CrookedDie from './CrookedDie';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SplashSection = styled.section`
    text-align: center;
    padding: 45px 0 15px;
`;

const SplashDie = styled.div`
    background: #FFF;
    height: 150px;
    width: 150px;
    border: 1px solid #000;
    border-radius: 10px;
    position: relative;
    margin: 0 auto 10px auto;
    padding-bottom: 15px;
    transform: rotate(33deg);
`;

const SplashDotRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 17px;

    :nth-child(2) {
        visibility: hidden;
    }
`;

const SplashDieDot = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #000;
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