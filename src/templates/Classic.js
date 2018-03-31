import React from "react";
import styled from "styled-components";
import FontAwesome from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/fontawesome-free-solid";
import { faTwitter, faGithub } from "@fortawesome/fontawesome-free-brands";
import Rehover from "rehover";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

const ContainerBlog = styled.div`
  max-width: 980px;
  margin: auto;
`;

const Title = styled.h2`
  text-align: center;
  color: #333535;
`;

const Meta = styled.div`
  color: #dedae1;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

const Body = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 14px;
  color: #333535;
  margin-top: 2em;
`;

const Share = styled(FontAwesome)`
  font-size: 25px;
  color: #333535;
  padding: 0.4em 0.5em;
  box-shadow: 0 0 0 0.1em rgba(0, 0, 0, 0.1) inset;
  border-radius: 50%;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    transition: 0.4s;
    color: white;
    background-color: #ff9500;
  }
`;

const ContainerShare = styled.div`
  text-align: center;
`;

const ContainerShareButton = styled.div``;

const ShareButton = styled(Share)`
  font-size: 18px;
  margin: 3px;

  &:hover {
    background-color: ${props => props.color};
    color: white;
  }
`;

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <ContainerBlog>
      <div className="blog-post">
        <Title>{frontmatter.title}</Title>
        <Meta>Publié le {frontmatter.date}</Meta>
        <Body dangerouslySetInnerHTML={{ __html: html }} />
        <ContainerShare>
          <Rehover delay={150}>
            <Share source icon={faShareAlt} />
            <ContainerShareButton destination>
              <Tooltip title="Partager sur Twitter!" position="bottom">
                <a href="">
                  <ShareButton icon={faTwitter} color="#00aced" />
                </a>
              </Tooltip>
              <Tooltip
                title="Effectuer une Pull request sur Github!"
                position="bottom"
              >
                <a href="https://github/PaulRosset/blog-kent">
                  <ShareButton icon={faGithub} color="#767676" />
                </a>
              </Tooltip>
            </ContainerShareButton>
          </Rehover>
        </ContainerShare>
      </div>
    </ContainerBlog>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        path
        title
        author
      }
    }
  }
`;
