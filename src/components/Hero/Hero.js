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
        Frontend web developer and open-source enthusiast with strong coding skills and experience in remote pair-programming. Proficient in JavaScript, ReactJs, Redux, HTML5, CSS3, Bootstrap, Tailwind, Context Api, Stripe, Sanity, Git and so on. Strong background in ICT and digital forensics. Proven ability to quickly learn and adapt to new technologies. 
          </SectionText>
          <button onClick={()=> window.location = 'https://google.com'}>Learn More</button>
    </LeftSection>
  </Section>
);

export default Hero;
