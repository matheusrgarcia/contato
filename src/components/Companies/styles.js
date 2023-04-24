import styled from "styled-components";

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  overflow-y: auto;
  overflow-x: hidden;
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

export const ButtonsContainer = styled.div`
  place-content: end;
  display: flex;
  margin-right: 15px;
  gap: 10px;
  height: 30px;
`;

export const CustomButtons = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;
