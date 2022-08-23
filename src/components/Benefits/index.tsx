import { useContext } from "react";

// icons lib import
import {
  BiStore,
  BsCurrencyDollar,
  BsGraphUp,
  MdSupportAgent,
  ImAirplane,
  BiExit,
  BsClock,
} from "react-icons/all";

import { PageContext } from "../../contexts/PageContext";

import { Container, RadialCard, Description, CardContainer } from "./styles";

export const Benefits: React.FC = () => {
  const { titles } = useContext(PageContext);

  return (
    <Container>
      <CardContainer>
        <RadialCard>
          <BiStore color="#fff" size="50" />
        </RadialCard>
        {titles.length != 0 && <Description>{titles[0]}</Description>}
      </CardContainer>

      <CardContainer>
        <RadialCard>
          <BsCurrencyDollar color="#fff" size="50" />
        </RadialCard>
        {titles.length != 0 && <Description>{titles[1]}</Description>}
      </CardContainer>

      <CardContainer>
        <RadialCard>
          <BsGraphUp color="#fff" size="50" />
        </RadialCard>
        {titles.length != 0 && <Description>{titles[2]}</Description>}
      </CardContainer>

      <CardContainer>
        <RadialCard>
          <MdSupportAgent color="#fff" size="50" />
        </RadialCard>
        {titles.length != 0 && <Description>{titles[3]}</Description>}
      </CardContainer>

      <CardContainer>
        <RadialCard>
          <ImAirplane color="#fff" size="50" />
        </RadialCard>
        {titles.length != 0 && <Description>{titles[4]}</Description>}
      </CardContainer>

      <CardContainer>
        <RadialCard>
          <BiExit color="#fff" size="50" />
        </RadialCard>
        {titles.length != 0 && <Description>{titles[5]}</Description>}
      </CardContainer>

      <CardContainer>
        <RadialCard>
          <BsClock color="#fff" size="50" />
        </RadialCard>
        {titles.length != 0 && <Description>{titles[6]}</Description>}
      </CardContainer>
    </Container>
  );
};
