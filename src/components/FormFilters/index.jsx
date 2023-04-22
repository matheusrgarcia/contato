import { FormFiltersContainer, CustomButton, InputsContainer } from "./styles";

export const FormFilters = () => {
  const filterOptions = ["Nome", "Email", "Telefone", "Nascimento", "Cidade"];

  return (
    <FormFiltersContainer>
      <CustomButton>+</CustomButton>
      <InputsContainer>
        <input type="text" placeholder="Buscar..." />
        <select>
          {filterOptions.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </InputsContainer>
    </FormFiltersContainer>
  );
};
