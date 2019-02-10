import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer`
    background: #FFF;
    color: #555;
    text-align: center;
    padding: 10px 0;
`;

const Footer = () => {
    return (
        <FooterWrap>
            <div className="footer-content">
                <p>Developed by <a href="https://github.com/connorchan/yahtzee" target="_blank" rel="noopener noreferrer">Connor Chan</a> &copy; {new Date().getFullYear()}</p>
            </div>
        </FooterWrap>
    );
}

export default Footer;