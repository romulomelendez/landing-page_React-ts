import { useContext, useState } from "react";

import { PageContext } from "../../contexts/PageContext";

import {
  Container,
  EnterpriseContainer,
  Input,
  InputContainer,
  InternalContainer,
  Button,
} from "./styles";

export const Form: React.FC = () => {
  interface FormProps {
    companyName: string;
    name: string;
    email: string;
    site: string;
    phone: string;
  }
  const initialValues = {
    companyName: "",
    name: "",
    email: "",
    site: "",
    phone: "",
  };

  const handleForm = () => {
    let formDatas = Object.values(formValues);
    formDatas.indexOf("") === -1
      ? alert("OK!")
      : alert("Form inputs cannot be empty");
  };

  const [formValues, setFormValues] = useState<FormProps>(initialValues);

  const { titles } = useContext(PageContext);
  let splittedString = titles[0].split(" ");

  return (
    <Container>
      <EnterpriseContainer>
        <label>{splittedString[0] + " " + splittedString[1]}</label>
        <Input
          type="text"
          placeholder={titles[2]}
          value={formValues.companyName}
          onChange={(e) =>
            setFormValues({
              companyName: e.target.value,
              name: formValues.name,
              email: formValues.email,
              site: formValues.site,
              phone: formValues.phone,
            })
          }
        />
      </EnterpriseContainer>

      <InputContainer>
        <InternalContainer>
          <label>{splittedString[2]}</label>
          <Input
            type="text"
            placeholder={titles[0]}
            value={formValues.name}
            onChange={(e) =>
              setFormValues({
                companyName: formValues.companyName,
                name: e.target.value,
                email: formValues.email,
                site: formValues.site,
                phone: formValues.phone,
              })
            }
          />
        </InternalContainer>

        <InternalContainer>
          <label>{splittedString[3]}</label>
          <Input
            type="email"
            placeholder={splittedString[4] + "@" + splittedString[2] + ".com"}
            value={formValues.email}
            onChange={(e) =>
              setFormValues({
                companyName: formValues.companyName,
                name: formValues.name,
                email: e.target.value,
                site: formValues.site,
                phone: formValues.phone,
              })
            }
          />
        </InternalContainer>
      </InputContainer>

      <InputContainer>
        <InternalContainer>
          <label>{splittedString[4]}</label>
          <Input
            type="text"
            placeholder="() _____-____"
            value={formValues.phone}
            onChange={(e) =>
              setFormValues({
                companyName: formValues.companyName,
                name: formValues.name,
                email: formValues.email,
                site: formValues.site,
                phone: e.target.value,
              })
            }
          />
        </InternalContainer>

        <InternalContainer>
          <label>{splittedString[5]}</label>
          <Input
            type="text"
            placeholder={splittedString[2] + ".com.br"}
            value={formValues.site}
            onChange={(e) =>
              setFormValues({
                companyName: formValues.companyName,
                name: formValues.name,
                email: formValues.email,
                site: e.target.value,
                phone: formValues.phone,
              })
            }
          />
        </InternalContainer>
      </InputContainer>

      <Button type="button" onClick={handleForm}>
        {splittedString[1]}
      </Button>
    </Container>
  );
};
