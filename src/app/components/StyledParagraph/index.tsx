import React from 'react';
import styled, { css } from 'styled-components';

interface ParaProps {
  children?: React.ReactNode; 
}

 const StyledParagraph = styled.p`
  background-color: white;
  border-radius: 0.25rem;
  padding: 16px;
`;

const StyledP: React.FC<ParaProps> = ({children})  => {

 

  return (
    <StyledParagraph>
      {children}
    </StyledParagraph>
  );
};

export default StyledP;