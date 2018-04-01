import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Post } from "../components/Board/index";
import Panel from "../components/Board/Panel";

const Container = styled.div`
  text-align: center;
`;

const BoardContainer = styled.div`
  padding: 1em;
  display: flex;
  margin: 25px 0;
`;

class Board extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    const { edges } = this.props.data.allMarkdownRemark;
    return (
      <Container>
        <Panel />
        <BoardContainer>
          {edges.map((elem, index) => <Post key={index} node={elem.node} />)}
        </BoardContainer>
      </Container>
    );
  }
}

export const query = graphql`
  query GetAllBlogPost($limit: Int) {
    allMarkdownRemark(limit: $limit) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "DD/MM/YYYY")
            meta
            author
          }
          excerpt
        }
      }
    }
  }
`;

export default Board;
