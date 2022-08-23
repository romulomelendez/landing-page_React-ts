import { useContext } from "react";

import { PageContext } from "../../contexts/PageContext";

import { Container, Title, Message } from "./styles";

export const FinalMessage: React.FC = () => {
  const { titles, body } = useContext(PageContext);

  return (
    <Container>
      <Title>{(titles[0] + titles[1]).toUpperCase()}</Title>
      <Message>{body[0] + body[1]}.</Message>
    </Container>
  );
};
