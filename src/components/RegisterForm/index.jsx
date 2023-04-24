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

  return (
    <>
      <PageContainer>
        <FormContainer>
          <CustomLogo src={Logo} alt="Contato seguro logo" />
          <FormFilters openContactForm={openContactForm} />
          <Contacts users={users} />
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
