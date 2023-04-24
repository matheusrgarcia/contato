import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  max-width: 500px;
  min-width: 300px;

  form {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 8px;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    align-items: flex-start;
  }

  input {
    width: 95%;
  }

  button {
    border-radius: 4px;
    padding: 4px 12px;
    color: #000;
    background-color: #fff;
    cursor: pointer;
    align-self: flex-end;
    margin-top: 12px;
  }
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  cursor: pointer;
`;

export const CustomButton = styled.button`
  border: none;
  color: #fff;
  border-radius: 4px;
  background-color: #000;
  font-size: 32px;
  padding: 4px 12px;

  cursor: pointer;
`;

export const Error = styled.div`
  font-size: 16px;
  color: red;
`;

export const Errors = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

export const Inline = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const RequiredText = styled.span`
  font-size: 12px;
`