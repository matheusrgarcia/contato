import { ContactsContainer, Header, ContactData } from "./styles";

export const Contacts = () => {
  return (
    <ContactsContainer>
      <Header>
        <span>Nome</span>
        <span>Email</span>
        <span>Telefone</span>
        <span>Nascimento</span>
        <span>Cidade</span>
      </Header>
      <ContactData></ContactData>
    </ContactsContainer>
  );
};
