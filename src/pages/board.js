import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Post } from "../components/Board/index";
import Panel from "../components/Board/Panel";
import { connect } from "react-redux";
import { getBlogPosts$ } from "../states/actions";

const Container = styled.div`
  text-align: center;
`;

const BoardContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 25px 0;
`;

class Board extends Component {
  constructor(props) {
    super(props);
    this.props.getBlogPosts$(this.props.data.allMarkdownRemark.edges);
  }

  render() {
    const { managerPanel = [] } = this.props;
    return (
      <Container>
        <Panel />
        <BoardContainer>
          {managerPanel.map((post, index) => <Post key={index} node={post} />)}
        </BoardContainer>
      </Container>
    );
  }
}

export const query = graphql`
  query GetAllBlogPost($limit: Int) {
    allMarkdownRemark(limit: $limit, sort: { fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MM/DD/YYYY")
            meta
            author
            year
            diploma
          }
          excerpt
        }
      }
    }
  }
`;

export default connect(state => ({ managerPanel: state.managerPanel }), {
  getBlogPosts$,
})(Board);
