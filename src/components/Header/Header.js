import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href= "/">
      <a sytle={{ display: "flex", alignItems: "center", color: 'white', marginBottom:20 }}> 
        <DiCssdeck size="2rem" /> <Span>Portfolio</Span>
      </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#Projects">
        <NavLink>Projects</NavLink>
        </Link>
      </li>


      <li>
        <Link href="#Tech">
        <NavLink>Technology</NavLink>
        </Link>
      </li>

      <li>
        <Link href="about">
        <NavLink>About</NavLink>
        </Link>
      </li>
      </Div2>
      <Div3>
        <SocialIcons a href="https://github.com"> 
        <AiFillGithub size="3rem" />
        </SocialIcons>

        <SocialIcons a href="https://linkedin.com"> 
        <AiFillLinkedin size="3rem" />
        </SocialIcons>

        <SocialIcons a href="https://gmail.com"> 
        <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
  </Container>
);

export default Header;
