import styled from "styled-components";

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 8px;
  padding: 8px;
  width: 100%;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;

export const ContactsData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Contact = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 8px;
  padding: 8px;
  width: 100%;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;
