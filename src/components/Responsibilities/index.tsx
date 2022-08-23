import { useContext } from "react";

import { PageContext } from "../../contexts/PageContext";

// import a photo to use in the component
import MainImage from "../../assets/images/happy-man.png";

import {
  Container,
  ResponsibilitiesSection,
  ImageSection,
  Image,
  Title,
  ResponsabilitiesItems,
  Item,
  Index,
  Content,
} from "./styles";

export const Responsibilities: React.FC = () => {
  const { titles, body } = useContext(PageContext);

  return (
    <Container>
      <ResponsibilitiesSection>
        <Title>{titles[0].slice(0, 13)}</Title>
        <ResponsabilitiesItems>
          {body.map((item, index) => (
            <Item key={index}>
              <Index>{index}.</Index>
              <Content>{item.slice(0, 70)}</Content>
            </Item>
          ))}
        </ResponsabilitiesItems>
      </ResponsibilitiesSection>

      <ImageSection>
        <Image src={MainImage} alt="Happy man image" />
      </ImageSection>
    </Container>
  );
};
