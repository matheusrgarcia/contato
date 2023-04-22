import styled from "styled-components";

export const ContactsContainer = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 8px;
  padding: 8px;
  width: 100%;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;

export const ContactData = styled.div`
  display: flex;
  flex-direction: row;
`;
