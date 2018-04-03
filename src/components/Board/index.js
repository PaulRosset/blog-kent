import React from "react";
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
  max-width: 8em;
  margin: 10px;
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

  &:hover {
    color: #ff9500;
    transition: 0.4s;
  }
`;

export function Post(props) {
  const { title, path, date, meta, author } = props.node.frontmatter;
  const { excerpt } = props.node;
  return (
    <ContainerPost>
      <ContainerData>
        <Title>{title}</Title>
        <Meta>{date}</Meta>
        <Meta>{meta}</Meta>
        <Meta>{author}</Meta>
        <p>{excerpt}</p>
        <Tooltip title="Voir l'article!" position="bottom">
          <Link to={path}>
            <Icon icon={faPlay} />
          </Link>
        </Tooltip>
      </ContainerData>
    </ContainerPost>
  );
}
