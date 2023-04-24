import {
  ContactsContainer,
  Header,
  ContactsData,
  Contact,
  ButtonsContainer,
  CustomButtons,
} from "./styles";

import { CompanyAPI } from "../../apis/companyAPI";

export const Companies = ({ companies, setCompanies, openEditForm, setCompany }) => {
  const removeCompany = (id) => {
    CompanyAPI.remove(id).then((response) => {
      if (response.status === 200) {
        setCompanies((oldData) => oldData.filter((company) => company.id !== id));
      }
    });
  };

  const editCompany = (company) => {
    setCompany(company);
    openEditForm(true);
  };

  return (
    <ContactsContainer>
      <Header>
        <span>Nome</span>
        <span>CNPJ</span>
        <span>Endereço</span>
      </Header>
      <ContactsData>
        {companies.map((company) => (
          <Contact key={company.id}>
            <div>{company.name}</div>
            <div>{company.cnpj}</div>
            <div>{company.address }</div>
            <ButtonsContainer>
              <CustomButtons onClick={() => editCompany(company)}>
                <img
                  style={{ width: "25px" }}
                  src="src\assets\edit.png"
                  alt="Editar"
                />
              </CustomButtons>
              <CustomButtons onClick={() => removeCompany(company.id)}>
                <img
                  style={{ width: "22px", marginRight: "15px" }}
                  src="src\assets\erase.png"
                  alt="Remover"
                />
              </CustomButtons>
            </ButtonsContainer>
          </Contact>
        ))}
      </ContactsData>
    </ContactsContainer>
  );
};
