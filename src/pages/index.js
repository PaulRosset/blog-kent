import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Epitech from "./../images/epitech.jpg";
import Kent from "./../images/kent.png";

const Container = styled.div`
  text-align: center;
`;

const Intro = styled.p`
  font-size: 13px;
  line-height: 1.5;
  font-weight: bold;
  color: #2c3e50;
`;

const Align = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px 10px 10px;
`;

const Image = styled.img`
  height: ${props => props.size}rem;
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
  top: 15px;

  &:hover {
    background: #ff9500;
    color: white;
    transition: 0.5s;
  }
`;

const IndexPage = () => (
  <Container>
    <h1>Hi people!</h1>
    <h3>Kent University 2017/2018</h3>
    <Flags> 🇫🇷 - 🇬🇧 </Flags>
    <Align>
      <Image size={3.5} src={Epitech} />
      <Image size={5} src={Kent} />
    </Align>
    <Intro>
      Nous sommes des étudiants à Epitech Nice et souhaitons faire partager à
      notre tour notre "International Duty".<br /> Nous avons choisi de faire
      cette dernière en Angleterre, à Kent University, une université au sein de
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
      nos ressentis.<br /> L'année concernée est 2017 - 2018.
    </Intro>
    <Access to="/page-2/">Voir les articles!</Access>
  </Container>
);

export default IndexPage;
