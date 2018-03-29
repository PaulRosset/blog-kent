import React from "react";
import styled from "styled-components";
import { Linked, LinkedReal } from "./../CommonStyle";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/fontawesome-free-brands";

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
  height: 3rem;
  border-radius: 50%;
  border: solid 2px white;
`;

const Header = () => (
  <HeaderContainer>
    <LeftSide>
      <Image src="http://via.placeholder.com/150x150" />
      <span style={{ marginLeft: 10 }}>Paul Rosset</span>
    </LeftSide>
    <RightSide>
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
