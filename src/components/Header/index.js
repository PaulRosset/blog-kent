import React from "react";
import styled from "styled-components";
import { Linked, LinkedReal } from "./../CommonStyle";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { Tooltip } from "react-tippy";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/fontawesome-free-brands";
import { faCodeBranch } from "@fortawesome/fontawesome-free-solid";
import Epitech from "./../../images/epitech.jpg";
import Kent from "./../../images/kent.png";

const HeaderContainer = styled.div`
  height: 5rem;
  background: #333535;
  color: white;
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: 0 0 6px #000;
`;

const LeftSide = styled.div`
  position: absolute;
  left: 8%;
  display: flex;
  align-items: center;
`;

const RightSide = styled.div`
  position: absolute;
  right: 8%;
`;

const Image = styled.img`
  height: ${props => props.size}rem;
`;

const ContainerImage = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-content: center;
`;

const Header = () => (
  <HeaderContainer>
    <LeftSide>
      <ContainerImage>
        <a href="http://www.epitech.eu/" style={{ alignSelf: "center" }}>
          <Image size={2} src={Epitech} />
        </a>
        <a href="https://www.kent.ac.uk/">
          <Image size={3} src={Kent} />
        </a>
      </ContainerImage>
    </LeftSide>
    <RightSide>
      <Tooltip title="Fork et créer ton premier blog post!" position="bottom">
        <LinkedReal href="https://github.com/PaulRosset/blog-kent">
          <FontAwesomeIcon icon={faCodeBranch} />
        </LinkedReal>
      </Tooltip>
      <LinkedReal href="https://github.com/PaulRosset">
        <FontAwesomeIcon icon={faGithub} />
      </LinkedReal>
      <LinkedReal href="https://twitter.com/RossetPaul">
        <FontAwesomeIcon icon={faTwitter} />
      </LinkedReal>
      <LinkedReal href="https://linkedin.com/in/paul-rosset-ab9891a8">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </LinkedReal>
      <LinkedReal href="https://www.instagram.com/paulrosset/">
        <FontAwesomeIcon icon={faInstagram} />
      </LinkedReal>
    </RightSide>
  </HeaderContainer>
);

export default Header;
