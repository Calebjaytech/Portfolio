import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: 234-8160377925">Nigeria 234-8160377925</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="Calebtech4real@gmail.com">
          Calebtech4real@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Making waves in the Tech field</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="#">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="#">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="#">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      
    </FooterWrapper>
  );
};

export default Footer;