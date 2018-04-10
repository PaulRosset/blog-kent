import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Post } from "../components/Board/index";
import Panel from "../components/Board/Panel";
import { connect } from "react-redux";
import { getBlogPosts$ } from "../states/actions";

const BoardContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 25px 0;
`;

class Board extends Component {
  static propTypes = {
    getBlogPosts$: PropTypes.func,
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.shape({
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
        }),
      }),
    }),
    managerPanel: PropTypes.shape({
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

  constructor(props) {
    super(props);
    this.props.getBlogPosts$(this.props.data.allMarkdownRemark.edges);
  }

  render() {
    const { managerPanel = [] } = this.props;
    return (
      <div style={{ textAlign: "center" }}>
        <Panel />
        <BoardContainer>
          {managerPanel.map((post, index) => <Post key={index} node={post} />)}
        </BoardContainer>
      </div>
    );
  }
}

/* eslint-disable-next-line */
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
