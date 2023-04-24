import {
  ContactsContainer,
  Header,
  ContactsData,
  Contact,
  ButtonsContainer,
  CustomButtons,
} from "./styles";

import { UserAPI } from "../../apis/userAPI";

export const Contacts = ({ users, setUsers, openEditForm, setUser }) => {
  const removeUser = (id) => {
    UserAPI.remove(id).then((response) => {
      if (response.status === 200) {
        setUsers((oldData) => oldData.filter((user) => user.id !== id));
      }
    });
  };

  const editUser = (user) => {
    setUser(user);
    openEditForm(true);
  };

  return (
    <ContactsContainer>
      <Header>
        <span>Nome</span>
        <span>Email</span>
        <span>Telefone</span>
        <span>Nascimento</span>
        <span>Cidade</span>
      </Header>
      <ContactsData>
        {users.map((user) => (
          <Contact key={user.id}>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
            <div>{user.birth}</div>
            <div>{user.city}</div>
            <ButtonsContainer>
              <CustomButtons onClick={() => editUser(user)}>
                <img
                  style={{ width: "25px" }}
                  src="src\assets\edit.png"
                  alt="Editar"
                />
              </CustomButtons>
              <CustomButtons onClick={() => removeUser(user.id)}>
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
