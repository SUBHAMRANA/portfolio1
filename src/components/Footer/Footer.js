import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  SocialContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:7827461503">7827461503</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:subhamr5610@gmail.com">
            subhamr5610@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
      <SocialIcons href="https://github.com/SUBHAMRANA" target="_blank"
          rel="noopener noreferrer">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/subham-rana-44545818b/" target="_blank"
          rel="noopener noreferrer">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
