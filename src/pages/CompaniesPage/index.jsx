import * as React from "react";
import { Link } from "react-router-dom";

import {
  FormContainer,
  PageContainer,
  CustomLogo,
  RoutesLinks,
} from "./styles";

import Logo from "../../assets/logo.png";
import { ModalCompanies } from "../../components/ModalCompanies";
import { CompanyAPI } from "../../apis/companyAPI";
import { Companies } from "../../components/Companies";
import { CompaniesFilters } from "../../components/CompaniesFilters";

export const CompaniesPage = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = React.useState(false);
  const [companies, setCompanies] = React.useState([]);
  const [company, setCompany] = React.useState({});

  const [textFilter, setTextFilter] = React.useState("");
  const [currentFilter, setCurrentFilter] = React.useState("name");

  const openContactForm = () => {
    setCompany({});
    setIsRegisterModalOpen(true);
  };

  const openEditForm = () => {
    setIsRegisterModalOpen(true);
  };

  const closeContactForm = () => {
    setIsRegisterModalOpen(false);
  };

  React.useEffect(() => {
    CompanyAPI.getAll().then((_companies) => {
      setCompanies(_companies);
    });
  }, []);

  const companiesFiltered = companies.filter((company) => {
    if (!textFilter) {
      return true;
    }
    const lowerCaseCurrentFilter = company[currentFilter].toLowerCase();
    const lowerCaseTextFilter = textFilter.toLowerCase();
    return lowerCaseCurrentFilter.includes(lowerCaseTextFilter);
  });

  return (
    <>
      <PageContainer>
        <FormContainer>
          <RoutesLinks>
            <Link to="/">Usuários</Link>
            <Link to="/empresas">Empresas</Link>
          </RoutesLinks>

          <CustomLogo src={Logo} alt="Contato seguro logo" />

          <CompaniesFilters
            openContactForm={openContactForm}
            setCurrentFilter={setCurrentFilter}
            setTextFilter={setTextFilter}
          />
          <Companies
            companies={companiesFiltered}
            setCompanies={setCompanies}
            openEditForm={openEditForm}
            setCompany={setCompany}
          />
        </FormContainer>
      </PageContainer>
      <ModalCompanies
        isOpen={isRegisterModalOpen}
        closeModal={closeContactForm}
        setCompanies={setCompanies}
        company={company}
        setCompany={setCompany}
      />
    </>
  );
};
