import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import IntroImg from "../images/logo-uni.png";

const Container = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Intro = styled.div`
  font-size: 13px;
  line-height: 1.5;
  font-weight: bold;
  color: #2c3e50;
`;

const Flags = styled.h4`
  margin: 0 0 5px 0;
`;

const Access = styled(Link)`
  padding: 11px 22px;
  border-radius: 40px;
  background: white;
  border: 1.5px solid #ff9500;
  color: #ff9500;
  font-weight: bold;
  text-decoration: none;
  transition: 0.5s;
  font-size: 12px;
  position: relative;
  top: 25px;

  &:hover {
    background: #ff9500;
    color: white;
    transition: 0.5s;
  }
`;

const ExtLink = styled.a`
  text-decoration: none;
  line-weight: bold;
  color: #ff9500;
`;

const ContainerImagePresentation = styled.div`
  margin-top: 35px;
`;

const Img = styled.img`
  height: 13rem;
`;

const IndexPage = () => (
  <Container>
    <h1>Hi people!</h1>
    <Flags> 🇫🇷 - 🇬🇧 </Flags>
    <Intro>
      Nous sommes des étudiants à Epitech et souhaitons faire partager à notre
      tour notre "International Duty".<br /> Nous avons choisi de faire cette
      dernière en Angleterre, à Kent University, une université au sein de
      Canterbury, qui est une petite cité du Kent.<br />
      Régulièrement, pendant notre année en Angleterre nous ferons de nombreux
      articles qui relateront nos aventures afin que vous ayez une idée de la
      destination tant du côté de l'université que du côté de la ville et de ses
      activités. Le blog qui suit démarrera à partir du moment où l'on connaitra
      notre destination jusqu'au retour et la fin de cette dernière.<br />C'est
      également une sacré expérience que de partir avec des amis à l'étranger
      dans un pays que ne l'on ne connait pas, ce voyage est aussi pour nous une
      page de notre vie qui se doit d'être écrite comme il se doit ! Puis, à
      l'avenir cela nous permettra de se remémorer les bons souvenirs de la vie
      étudiante.
      <br />Les faits et les appréciations que nous donnerons, seront uniquement
      nos ressentis.<br />{" "}
      <div style={{ marginTop: 15 }}>
        Le blog se veut collaboratif et peut tout à fait être améliorer mais
        également être utilisé pour les étudiants des prochaines années.<br />
        Pour participer ?{" "}
        <ExtLink href="https://github.com/PaulRosset/blog-kent">
          Soumettez une pull request!
        </ExtLink>
      </div>
      <div style={{ marginTop: 15 }}>
        Les posts ne répondent pas à une de tes questions ? Créer une issues sur{" "}
        <ExtLink href="https://github.com/PaulRosset/blog-kent/issues">
          github!
        </ExtLink>
      </div>
    </Intro>
    <Access to="/board">Voir les articles!</Access>
    <ContainerImagePresentation>
      <Img src={IntroImg} alt="intro-university" />
    </ContainerImagePresentation>
  </Container>
);

export default IndexPage;
