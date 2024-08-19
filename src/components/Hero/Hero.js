import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My personal Portfolio
      </SectionTitle>
        <SectionText>
          Kindly check my website for more details and thnaks and God bless you 
          </SectionText>
          <button onClick={()=> window.location = 'https://google.com'}>Learn More</button>
    </LeftSection>
  </Section>
);

export default Hero;
