import styled from "styled-components";
import Link from "gatsby-link";

export const Linked = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 5px;
`;

export const LinkedReal = styled.a`
  color: white;
  text-decoration: none;
  margin: 5px;
  transition: 0.3s;
  transform: translateY(-2%);
  position: relative;

  &:hover {
    transition: 0.3s;
    top: -5px;
    color: #ff9500;
    position: relative;
  }
`;

export const LinkedMobile = styled.a`
  margin: 0 5px;
`;

export const Home = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 15px;

  &:hover {
    transition: 0.3s;
    color: #ff9500;
  }
`;
