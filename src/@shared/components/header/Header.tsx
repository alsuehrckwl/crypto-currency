import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Nav, Tab } from "./Header.style";

const activeClassName = "active";

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    border: 1px solid #bdbdbd;
    background-color: #fff;
    color: #000;
  }
`;

export function Header() {
  return (
    <Nav>
      <Tab>
        <StyledLink to="/coins">가상자산 시세 목록</StyledLink>
      </Tab>
      <Tab>
        <StyledLink to="/bookmark">북마크 목록</StyledLink>
      </Tab>
    </Nav>
  );
}
