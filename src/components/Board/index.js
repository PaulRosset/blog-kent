import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "gatsby-link";
import FontAwesome from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/fontawesome-free-solid";
import { Tooltip } from "react-tippy";

const ContainerPost = styled.div`
  box-shadow: 0px 0px 8px #b6bdbe;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  max-width: 9em;
  margin: 10px;
  cursor: pointer;
  transition: 0.4s;
  text-decoration: none;

  &:hover {
    transform: scale(1.07);
    transition: 0.4s;

    .fa-play {
      color: #ff9500;
      transition: 0.4s;
    }
  }
`;

const ContainerData = styled.div`
  padding: 10px;
  font-size: 11px;
  font-family: "Lato", sans-serif;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  font-family: "Lato";
`;

const Meta = styled.div`
  color: #dedae1;
  font-size: 8px;
  font-weight: bold;
  margin-top: 5px;
`;

const Icon = styled(FontAwesome)`
  color: #333535;
  transition: 0.4s;
  font-size: 13px;
  box-shadow: 0 0 0 0.1em rgba(0, 0, 0, 0.1) inset;
  padding: 10px;
  border-radius: 5px;
`;

const WrapperLink = styled(Link)`
  text-decoration: none;
  color: #333535;
`;

export function Post(props) {
  const { title, path, author, year, diploma } = props.node.frontmatter;
  const { excerpt } = props.node;
  return (
    <ContainerPost>
      <Tooltip title="Voir l'article!">
        <WrapperLink to={path}>
          <ContainerData>
            <Title>{title}</Title>
            <Meta>{diploma}</Meta>
            <Meta>{year}</Meta>
            <Meta>{author}</Meta>
            <p>{excerpt}</p>
            <Icon icon={faPlay} />
          </ContainerData>
        </WrapperLink>
      </Tooltip>
    </ContainerPost>
  );
}

Post.propTypes = {
  node: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
      author: PropTypes.string,
      year: PropTypes.string,
      diploma: PropTypes.string,
    }),
    excerpt: PropTypes.string,
  }),
};
