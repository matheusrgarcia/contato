import * as React from "react";

import { FormContainer, PageContainer, CustomLogo } from "./styles";

import Logo from "../../assets/logo.png";
import { FormFilters } from "../FormFilters";
import { Contacts } from "../Contacts";
import { Modal } from "../Modal";
import { ActionButtons } from "../ActionButtons";
import { UserAPI } from "../../apis/userAPI";

export const RegisterForm = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = React.useState(false);
  const [users, setUsers] = React.useState([]);

  const [textFilter, setTextFilter] = React.useState("");
  const [currentFilter, setCurrentFilter] = React.useState("name");

  const openContactForm = () => {
    setIsRegisterModalOpen(true);
  };

  const closeContactForm = () => {
    setIsRegisterModalOpen(false);
  };

  React.useEffect(() => {
    UserAPI.getAll().then((_users) => {
      console.log(_users);
      setUsers(_users);
    });
  }, []);

  const usersFiltered = users.filter((user) => {
    if (!textFilter) {
      return true;
    }
    const lowerCaseCurrentFilter = user[currentFilter].toLowerCase();
    const lowerCaseTextFilter = textFilter.toLowerCase();
    return lowerCaseCurrentFilter.includes(lowerCaseTextFilter);
  });

  return (
    <>
      <PageContainer>
        <FormContainer>
          <CustomLogo src={Logo} alt="Contato seguro logo" />
          <FormFilters
            openContactForm={openContactForm}
            setCurrentFilter={setCurrentFilter}
            setTextFilter={setTextFilter}
          />
          <Contacts users={usersFiltered} />
          <ActionButtons />
        </FormContainer>
      </PageContainer>
      <Modal
        isOpen={isRegisterModalOpen}
        closeModal={closeContactForm}
        setUsers={setUsers}
      />
    </>
  );
};
