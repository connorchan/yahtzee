import React from 'react';
import styled from 'styled-components';

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

const CrookedDie = () => {
    return (
        <SplashDie>
            <SplashDotRow>
                <SplashDieDot />
                <SplashDieDot />
                <SplashDieDot />
            </SplashDotRow>
            <SplashDotRow>
                <SplashDieDot />
                <SplashDieDot />
                <SplashDieDot />
            </SplashDotRow>
            <SplashDotRow>
                <SplashDieDot />
                <SplashDieDot />
                <SplashDieDot />
            </SplashDotRow>
        </SplashDie>
    );
};

export default CrookedDie;