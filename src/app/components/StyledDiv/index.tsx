import React from 'react';
import styled, { css } from 'styled-components';

interface DivProps {
    children?: React.ReactNode; 
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }

const MyDiv: React.FC<DivProps>  = ({children, onClick}) => {

  const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background-color: white;
    border-radius: 0.25rem;

    &:hover {
        cursor: pointer;
      }
  `;

  return (
    <StyledDiv onClick={onClick}>
      {children}
    </StyledDiv>
  );
};

export default MyDiv;