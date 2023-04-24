import * as React from "react";

import {
  ModalWrapper,
  ModalContent,
  CloseButton,
  Error,
  Errors,
} from "./styles";

import { UserAPI } from "../../apis/userAPI";

export const Modal = ({ isOpen, closeModal, setUsers }) => {
  const [errors, setErrors] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, birth, phone, city } = event.target;

    const useData = {
      name: name.value,
      email: email.value,
      birth: birth.value,
      phone: phone.value,
      city: city.value,
    };

    UserAPI.create(useData).then((response) => {
      if (response.error) {
        setErrors((oldErrors) => [...oldErrors, response.error]);
      }
      if (response.data) {
        setUsers((oldData) => [...oldData, response.data]);
        closeModal();
      }
    });
  };

  React.useEffect(() => {
    setErrors([]);
  }, [isOpen]);

  return isOpen ? (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <form onSubmit={handleSubmit}>
          <h2>Usuário</h2>
          <label>
            Nome:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Telefone:
            <input type="text" name="phone" />
          </label>
          <label>
            Data de Nascimento:
            <input type="date" name="birth" />
          </label>
          <label>
            Cidade de Nascimento:
            <input type="text" name="city" />
          </label>
          <Errors>
            {errors.map((error, index) => (
              <Error key={`error-${index}`}>{error}</Error>
            ))}
          </Errors>

          <button type="submit">Enviar</button>
        </form>
      </ModalContent>
    </ModalWrapper>
  ) : null;
};
