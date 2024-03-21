import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import Button from "react-bootstrap/Button";
import ExampleDoc from "../../files/resume.pdf";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi, I'm Ritik Bhatt. <br />
          Nice to meet you! I am a results-driven Software Developer with a year
          of hands-on experience, holding a degree from the esteemed Army
          Institute of Technology, Pune. My approach is characterized by quiet
          confidence, natural curiosity, and a perpetual commitment to refining
          my skills. <br />I am eager to contribute my skills and enthusiasm to
          dynamic projects that demand creativity and technical excellence.
        </SectionText>
        <a href={ExampleDoc} download="MyExampleDoc" target="_blank">
          <Button variant="outline-warning">Download Resume</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
