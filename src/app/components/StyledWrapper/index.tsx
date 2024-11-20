import React from 'react';
import styled, { css } from 'styled-components';

interface StyledWrapperProps {
  variant: 'inner' | 'outer'; 
  children: React.ReactNode; 
}

const commonStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const outerStyles = css`
  ${commonStyles};
  background-color: #f3f4f6;
  width: 100vw;
  height: 100%;
  flex-grow: 1;
`;

const innerStyles = css`
  ${commonStyles};
  background-color: #6b7280;  
  width: 83.3333%;  
  max-width: 75%; 
  padding: 2rem;  
  border-radius: 0.375rem; 
`;

const StyledWrapper = styled.div<StyledWrapperProps>`
  ${(props) => (props.variant === 'outer' ? outerStyles : innerStyles)};
`;

const Wrapper: React.FC<StyledWrapperProps> = ({ variant, children }) => {
  return <StyledWrapper variant={variant}>{children}</StyledWrapper>;
};

export default Wrapper;
