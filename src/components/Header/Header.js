import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { Container, Div1, Div3, SocialIcons } from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <a
        href="/"
        style={{ display: "flex", alignItems: "center", color: "white" }}
      >
        <DiCssdeck size="3rem" /> <span>Portfolio</span>
      </a>
    </Div1>
    <Div3>
      <SocialIcons href="https://github.com/bhattritik21">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ritik-bhatt-681266194/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
