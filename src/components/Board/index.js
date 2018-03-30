import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import FontAwesome from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/fontawesome-free-solid";

const ContainerPost = styled.div`
  box-shadow: 0px 0px 4px #333535;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  max-width: 8em;
`;

const ContainerData = styled.div`
  padding: 10px;
  font-size: 11px;
  font-family: "Lato", sans-serif;
`;

const Title = styled.div`
  font-size: 12px;
`;

const Meta = styled.div`
  color: #dedae1;
  font-size: 8px;
  font-weight: bold;
  margin-top: 5px;
`;

const Image = styled.img`
  height: 10rem;
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
  const { title, path, date, meta } = props.node.frontmatter;
  const { excerpt } = props.node;
  return (
    <ContainerPost>
      <Image src="http://via.placeholder.com/150x250" />
      <ContainerData>
        <Title>{title}</Title>
        <Meta>{date}</Meta>
        <Meta>{meta}</Meta>
        <p>{excerpt}</p>
        <Link to={path}>
          <Icon icon={faPlay} />
        </Link>
      </ContainerData>
    </ContainerPost>
  );
}
