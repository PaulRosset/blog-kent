import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";
import FontAwesome from "@fortawesome/react-fontawesome";
import Rehover from "rehover";
import {
  faAlignCenter,
  faSort,
  faObjectGroup,
  faUser,
} from "@fortawesome/fontawesome-free-solid";

const ContainerPanel = styled.div`
  margin: 25px 0;
`;

const Icon = styled(FontAwesome)`
  color: #333535;
  font-size: 20px;
  border: solid 1px #333535;
  padding: 0.5em;
  border-radius: 500em;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    transition: 0.4s;
    color: white;
    background-color: #ff9500;
    border-color: white;
  }
`;

const ContainerTools = styled.div`
  display: flex;
  flex-direction: inline;
  justify-content: center;
  margin-top: 10px;
`;

const Tool = styled(FontAwesome)`
  color: ${props => props.color};
  font-size: 20px;
  box-shadow: 0 0 0 0.1em rgba(0, 0, 0, 0.1) inset;
  border-radius: 500em;
  padding: 0.5em;
  margin: 5px;
`;

class Panel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
    };
  }

  handleOpenMenu = () => {
    this.setState(prevState => ({
      isOpenMenu: !prevState.isOpenMenu,
    }));
  };

  render() {
    const { isOpenMenu } = this.state;
    return (
      <ContainerPanel>
        <Rehover delay={150}>
          <Icon source icon={faAlignCenter} onClick={this.handleOpenMenu} />
          <ContainerTools destination>
            <Tool
              icon={faSort}
              color="#21ba45"
              style={{ padding: "0.5em 0.7em" }}
            />
            <Tool icon={faObjectGroup} color="#2185d0" />
            <Tool icon={faUser} color="#fbbd08" />
          </ContainerTools>
        </Rehover>
      </ContainerPanel>
    );
  }
}

export default Panel;
