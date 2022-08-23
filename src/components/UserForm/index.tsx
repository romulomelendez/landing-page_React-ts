import { Form } from "../Form";
import { FinalMessage } from "../FinalMessage";

import { Container } from "./styles";

export const UserForm: React.FC = () => (
  <Container>
    <FinalMessage />
    <Form />
  </Container>
);
