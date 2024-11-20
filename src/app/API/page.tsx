'use client'
import { useEffect, useState } from 'react';
import StyledDiv from '../components/StyledDiv'
import StyledParagraph from '../components/StyledParagraph'
import Footer from '../components/StyledFooter'
import Wrapper from '../components/StyledWrapper'

const API = () => {
  
  const [joke, setJoke] = useState<string>("");
  
  async function getData() {
    const url = "https://api.chucknorris.io/jokes/random";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      setJoke(json.value)
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Wrapper variant="outer">
        <Wrapper variant="inner" >
         <StyledParagraph>{joke}</StyledParagraph>
          <StyledDiv onClick={getData}>click for a joke.</StyledDiv>
        </Wrapper>
        <Footer></Footer>
    </Wrapper>
  );
}


export default API;
