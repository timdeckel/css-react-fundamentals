import React from 'react';
import styled from 'styled-components';

interface FooterProps {
  backgroundColor?: string;
  textColor?: string;
}

const StyledFooterText = styled.p<FooterProps>`
  color: ${(props) => props.textColor || '#fff'};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
`;

const StyledFooter = styled.footer<FooterProps>`
  background-color: ${(props) => props.backgroundColor || '#333'};
  color: ${(props) => props.textColor || '#fff'};
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
`;


const Footer: React.FC<FooterProps> = ({ backgroundColor, textColor }) => {
  return (
    <StyledFooter backgroundColor={backgroundColor} textColor={textColor}>
        &copy; {new Date().getFullYear()} My Website. All rights reserved. <br />
        <StyledFooterText textColor={textColor}>Privacy Policy | Terms of Service</StyledFooterText>
    </StyledFooter>
  );
};

export default Footer;