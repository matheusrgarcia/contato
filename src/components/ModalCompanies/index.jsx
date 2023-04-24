import * as React from "react";

import {
  ModalWrapper,
  ModalContent,
  CloseButton,
  Error,
  Errors,
  RequiredText,
} from "./styles";

import { CompanyAPI } from "../../apis/companyAPI";

export const ModalCompanies = ({
  isOpen,
  closeModal,
  setCompanies,
  company,
  setCompany,
}) => {
  const [errors, setErrors] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, cnpj, address } = event.target;

    const useData = {
      name: name.value,
      cnpj: cnpj.value,
      address: address.value,
      id: company.id,
    };

    if (!isEdit) {
      CompanyAPI.create(useData).then((response) => {
        if (response.error) {
          setErrors((oldErrors) => [...oldErrors, response.error]);
        }
        if (response.data) {
          setCompanies((oldData) => [...oldData, response.data.company]);
          closeModal();
        }
      });
    }

    if (isEdit) {
      CompanyAPI.update(useData).then((response) => {
        if (response.error) {
          setErrors((oldErrors) => [...oldErrors, response.error]);
        }
        if (response.data) {
          setCompanies((oldData) =>
            oldData.map((_company) =>
              _company.id === company.id
                ? { ..._company, ...response.data }
                : _company
            )
          );
          closeModal();
        }
      });
    }
  };

  const isEdit = Object.keys(company).length > 0;

  React.useEffect(() => {
    setErrors([]);
  }, [isOpen]);

  return isOpen ? (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <form onSubmit={handleSubmit}>
          <h2>Inserir</h2>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              required
              defaultValue={company.name || ""}
            />
            <RequiredText>Obrigatório</RequiredText>
          </label>
          <label>
            CNPJ
            <input
              type="text"
              name="cnpj"
              required
              defaultValue={company.cnpj || ""}
            />
            <RequiredText>Obrigatório</RequiredText>
          </label>

          <label>
            Endereço da empresa
            <input
              type="text"
              name="address"
              defaultValue={company.city || ""}
            />
          </label>
          <Errors>
            {errors.map((error, index) => (
              <Error key={`error-${index}`}>{error}</Error>
            ))}
          </Errors>
          <button type="submit">{isEdit ? "Salvar Edições" : "Enviar"}</button>
        </form>
      </ModalContent>
    </ModalWrapper>
  ) : null;
};
