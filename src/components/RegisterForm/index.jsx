import { FormContainer, PageContainer, CustomLogo } from "./styles";

import Logo from "../../assets/logo.png";
import { FormFilters } from "../FormFilters";
import { Contacts } from "../Contacts";

export const RegisterForm = () => {
  return (
    <PageContainer>
      <FormContainer>
        <CustomLogo src={Logo} alt="Contato seguro logo" />
        <FormFilters />
        <Contacts />
      </FormContainer>
    </PageContainer>
  );
};
