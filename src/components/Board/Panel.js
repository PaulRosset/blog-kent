import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FontAwesome from "@fortawesome/react-fontawesome";
import Rehover from "rehover";
import {
  faAlignCenter,
  faSortNumericUp,
  faSortNumericDown,
  faObjectGroup,
  faUser,
} from "@fortawesome/fontawesome-free-solid";
import { connect } from "react-redux";
import { sortBy$ } from "./../../states/actions";
import { Tooltip } from "react-tippy";

const ContainerPanel = styled.div`
  margin: 25px 0;
  text-align: center;
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
  transition: 0.4s;
  cursor: ${props => props.cursor};

  &:hover {
    transition: 0.4s;
    background: ${props => props.hovercolor};
    color: white;
  }
`;

class Panel extends PureComponent {
  static propTypes = {
    sortBy$: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      sort: true,
    };
  }

  sortBy = () => {
    this.setState(
      prevState => ({
        sort: !prevState.sort,
      }),
      () => this.props.sortBy$(this.state.sort ? "ASC" : "DESC")
    );
  };

  render() {
    return (
      <ContainerPanel>
        <Rehover delay={150}>
          <Icon source="true" icon={faAlignCenter} />
          <ContainerTools destination="true">
            <Tooltip
              title={`Trié par Date ${this.state.sort ? "DESC" : "ASC"}`}
            >
              <Tool
                icon={this.state.sort ? faSortNumericDown : faSortNumericUp}
                color="#21ba45"
                style={{ padding: "0.5em 0.7em" }}
                hovercolor="#000"
                onClick={this.sortBy}
                cursor="pointer"
              />
            </Tooltip>
            <Tooltip title="Not ready yet">
              <Tool
                icon={faObjectGroup}
                color="rgba(0, 0, 0, 0.1)"
                hovercolor="rgba(0, 0, 0, 0.1)"
                cursor="not-allowed"
              />
            </Tooltip>
            <Tooltip title="Not ready yet">
              <Tool
                icon={faUser}
                color="rgba(0, 0, 0, 0.1)"
                hovercolor="rgba(0, 0, 0, 0.1)"
                cursor="not-allowed"
              />
            </Tooltip>
          </ContainerTools>
        </Rehover>
      </ContainerPanel>
    );
  }
}

export default connect(null, { sortBy$ })(Panel);
