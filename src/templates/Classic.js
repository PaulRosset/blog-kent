import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FontAwesome from "@fortawesome/react-fontawesome";
import { faShareAlt, faAngleLeft } from "@fortawesome/fontawesome-free-solid";
import { faTwitter, faGithub } from "@fortawesome/fontawesome-free-brands";
import Rehover from "rehover";
import { Tooltip } from "react-tippy";
import Link from "gatsby-link";
import { Helmet } from "react-helmet";
import "react-tippy/dist/tippy.css";

const ContainerBlog = styled.div`
  max-width: 980px;
  margin: auto;
  margin-bottom: 30px;
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

const Back = styled(Share)`
  position: absolute;
  padding: 0.4em 0.6em;
  left: 20px;

  &:hover {
    color: white;
    background-color: #ff9500;
  }
`;

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <ContainerBlog>
      <Helmet>
        <meta name="description" content={frontmatter.title} />
        <meta name="author" content={frontmatter.author} />
        <meta
          name="keywords"
          content={`${frontmatter.meta} ${frontmatter.diploma}`}
        />
        <meta
          property="og:url"
          content={`${window.location.origin}/${frontmatter.path}`}
        />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={markdownRemark.excerpt} />
      </Helmet>
      <div className="blog-post">
        <Title>
          <Link to="/board">
            <Back icon={faAngleLeft} />
          </Link>{" "}
          {frontmatter.title}
        </Title>
        <Meta>Publié le {frontmatter.date}</Meta>
        <Meta>Année {frontmatter.year}</Meta>
        <Meta>Msc {frontmatter.diploma}</Meta>
        <Body dangerouslySetInnerHTML={{ __html: html }} />
        <ContainerShare>
          <Rehover delay={150}>
            <Share source="true" icon={faShareAlt} />
            <ContainerShareButton destination="true">
              <Tooltip title="Partager sur Twitter!" position="bottom">
                <a
                  href={`https://twitter.com/intent/tweet?hashtags=Kent,ukc,epitech&original_referer=${
                    window.location.origin
                  }/${frontmatter.path}&text=${
                    markdownRemark.excerpt
                  } @UniKent&url=${window.location.origin}${frontmatter.path}`}
                >
                  <ShareButton icon={faTwitter} color="#00aced" />
                </a>
              </Tooltip>
              <Tooltip
                title="Effectuer une Pull request sur Github!"
                position="bottom"
              >
                <a href="https://github.com/PaulRosset/blog-kent">
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

/* eslint-disable-next-line */
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        path
        title
        author
        year
        diploma
      }
      excerpt
    }
  }
`;

Template.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      excerpt: PropTypes.string,
      frontmatter: PropTypes.shape({
        date: PropTypes.string,
        path: PropTypes.string,
        title: PropTypes.string,
        author: PropTypes.string,
        year: PropTypes.string,
        diploma: PropTypes.string,
      }),
      html: PropTypes.string,
    }),
  }),
};
