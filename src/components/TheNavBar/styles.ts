import styled from "styled-components";

export const NavBar = styled.nav`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  height: 80px;
  width: 100%;
  max-width: 100vw;
  box-shadow: 0 6px 20px 0px #cecece;
`;

export const MiniContainer = styled.div`
  display: grid;
  grid-template-columns: 110px 80px;
  place-items: center;
  margin-left: -350px;

  @media (max-width: 950px) {
    margin-left: 0;
  }
`;

export const Text = styled.p`
  color: #808080;
`;

export const Img = styled.img`
  margin-top: -4px;
`;
