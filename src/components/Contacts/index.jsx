import { ContactsContainer, Header, ContactsData, Contact } from "./styles";

export const Contacts = ({ users }) => {
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
          </Contact>
        ))}
      </ContactsData>
    </ContactsContainer>
  );
};
