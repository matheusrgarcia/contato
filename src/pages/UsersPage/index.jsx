import * as React from "react";
import { Link } from "react-router-dom";

import { FormContainer, PageContainer, CustomLogo, RoutesLinks } from "./styles";

import Logo from "../../assets/logo.png";
import { FormFilters } from "../../components/FormFilters";
import { Contacts } from "../../components/Contacts";
import { Modal } from "../../components/Modal";
import { UserAPI } from "../../apis/userAPI";

export const UsersPage = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [user, setUser] = React.useState({});

  const [textFilter, setTextFilter] = React.useState("");
  const [currentFilter, setCurrentFilter] = React.useState("name");

  const openContactForm = () => {
    setUser({});
    setIsRegisterModalOpen(true);
  };

  const openEditForm = () => {
    setIsRegisterModalOpen(true);
  };

  const closeContactForm = () => {
    setIsRegisterModalOpen(false);
  };

  React.useEffect(() => {
    UserAPI.getAll().then((_users) => {
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
          <RoutesLinks>
            <Link to="/">Usuários</Link>
            <Link to="/empresas">Empresas</Link>
          </RoutesLinks>

          <CustomLogo src={Logo} alt="Contato seguro logo" />
          <FormFilters
            openContactForm={openContactForm}
            setCurrentFilter={setCurrentFilter}
            setTextFilter={setTextFilter}
          />
          <Contacts
            users={usersFiltered}
            setUsers={setUsers}
            setUser={setUser}
            openEditForm={openEditForm}
          />
        </FormContainer>
      </PageContainer>
      <Modal
        isOpen={isRegisterModalOpen}
        closeModal={closeContactForm}
        setUsers={setUsers}
        user={user}
      />
    </>
  );
};
