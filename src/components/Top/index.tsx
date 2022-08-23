import { useContext } from "react";

import { PageContext } from "../../contexts/PageContext";

import { Title, Subtitle, Container } from "./styles";

export const Top: React.FC = () => {
  const { titles, body } = useContext(PageContext);

  return (
    <Container>
      <Title>{titles[0].toUpperCase()}</Title>
      <Subtitle>{body[0]}</Subtitle>
    </Container>
  );
};
