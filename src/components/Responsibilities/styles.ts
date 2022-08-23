import styled from "styled-components";

// ############## LIST STYLES #################################################################################

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 600px));
  justify-content: center;
  column-gap: 1.6em;
  height: max-content;
`;

export const ResponsibilitiesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 600px));
  padding: 2px;

  @media (max-width: 1485px) {
    margin: 65px auto 65px auto;
  }

  @media (max-width: 1247px) {
    margin: 85px auto 65px auto;
  }

  @media (max-width: 972px) {
    margin: 285px auto 65px auto;
  }

  @media (max-width: 700px) {
    margin: 1000px auto 65px auto;
  }
`;

export const Title = styled.h1`
  color: #105a7d;
  font-weight: 800;
  font-size: 45pt;
  margin-bottom: 50px;

  @media (max-width: 500px) {
    font-size: 28pt;
  }
`;

export const ResponsabilitiesItems = styled.div`
  display: grid;
  gap: 30px;
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: max-content minmax(100px, 550px);
  column-gap: 5px;

  @media (max-width: 400px) {
    width: 200px;
    font-size: 10pt;
  }
`;
export const Index = styled.p`
  color: #1a6591;
  font-weight: 800;
`;

export const Content = styled.p`
  color: #808080;
`;

// ############## IMAGE STYLES #################################################################################

export const ImageSection = styled.div`
  display: grid;
  justify-content: center;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 100%;
  width: 900px;

  @media (max-width: 670px) {
    display: none;
  }
`;
