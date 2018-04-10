import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { LinkedReal, Home, LinkedMobile } from "./../CommonStyle";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { Tooltip } from "react-tippy";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/fontawesome-free-brands";
import {
  faCodeBranch,
  faHome,
  faBars,
} from "@fortawesome/fontawesome-free-solid";
import Epitech from "./../../images/epitech-fs8.png";
import Kent from "./../../images/kent-fs8.png";

const HeaderContainer = styled.div`
  height: 5rem;
  background: #333535;
  color: white;
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: 0 0 6px #000;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const RightSide = styled.div`
  margin-right: 25px;
`;

const ContainerImage = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-content: center;
`;

const MobileMenu = styled.div`
  position: absolute;
  display: flex;
  padding: 5px;
  background-color: #dedae1;
  right: 5px;
  border-radius: 5px;
  top: 60px;
  box-shadow: 0 0 6px #000;
`;

const MobileIcon = styled(FontAwesomeIcon)`
  color: #333535;
`;

class Header extends React.Component {
  state = {
    isOpenSocialMenu: false,
  };

  OpenSocialMenu = () => {
    this.setState(prevState => ({
      isOpenSocialMenu: !prevState.isOpenSocialMenu,
    }));
  };

  render() {
    return (
      <HeaderContainer>
        <LeftSide>
          <ContainerImage>
            <a href="http://www.epitech.eu/" style={{ alignSelf: "center" }}>
              <img style={{ height: "2rem" }} src={Epitech} />
            </a>
            <a href="https://www.kent.ac.uk/">
              <img style={{ height: "3rem" }} src={Kent} />
            </a>
          </ContainerImage>
        </LeftSide>
        <MediaQuery query="(min-device-width: 500px)">
          <RightSide>
            <Home to="/">
              <FontAwesomeIcon icon={faHome} />
            </Home>
            <Tooltip
              title="Fork et créer ton premier blog post!"
              position="bottom"
            >
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
        </MediaQuery>
        <MediaQuery query="(max-device-width: 499px)">
          <RightSide>
            <FontAwesomeIcon icon={faBars} onClick={this.OpenSocialMenu} />
            {this.state.isOpenSocialMenu && (
              <MobileMenu>
                <Home to="/">
                  <MobileIcon icon={faHome} />
                </Home>
                <Tooltip
                  title="Fork et créer ton premier blog post!"
                  position="bottom"
                >
                  <LinkedMobile href="https://github.com/PaulRosset/blog-kent">
                    <MobileIcon icon={faCodeBranch} />
                  </LinkedMobile>
                </Tooltip>
                <LinkedMobile href="https://github.com/PaulRosset">
                  <MobileIcon icon={faGithub} />
                </LinkedMobile>
                <LinkedMobile href="https://twitter.com/RossetPaul">
                  <MobileIcon icon={faTwitter} />
                </LinkedMobile>
                <LinkedMobile href="https://linkedin.com/in/paul-rosset-ab9891a8">
                  <MobileIcon icon={faLinkedinIn} />
                </LinkedMobile>
                <LinkedMobile href="https://www.instagram.com/paulrosset/">
                  <MobileIcon icon={faInstagram} />
                </LinkedMobile>
              </MobileMenu>
            )}
          </RightSide>
        </MediaQuery>
      </HeaderContainer>
    );
  }
}

export default Header;
