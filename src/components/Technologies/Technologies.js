import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>Hello i have work with different techlogies raging from backend and front end dev
      <List>
        <ListItem>

          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Calebjayteg</ListTitle>
            <ListParagraph>
              Exprence with python <br />
              and Django

            </ListParagraph>

          </ListContainer>
        </ListItem>


        <ListItem>

          <DiZend size="3rem" />
          <ListContainer>
            <ListTitle>Calebjayteg</ListTitle>
            <ListParagraph>
              Exprence with python <br />
              and Django

            </ListParagraph>

          </ListContainer>
        </ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Calebjayteg</ListTitle>
          <ListParagraph>
            Exprence with python <br />
            and Django

          </ListParagraph>

        </ListContainer>



      </List>
    </SectionText>
  </Section>
);
export default Technologies;
