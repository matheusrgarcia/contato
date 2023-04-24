import { FormFiltersContainer, CustomButton, InputsContainer } from "./styles";

export const CompaniesFilters = ({
  openContactForm,
  setCurrentFilter,
  setTextFilter,
}) => {
  const filterOptions = [
    {
      text: "Nome",
      value: "name",
    },
    {
      text: "CNPJ",
      value: "cnpj",
    },
    {
      text: "Endereço",
      value: "address",
    },
  ];

  const handleFilterChange = (event) => {
    const filter = event.target.value;
    setCurrentFilter(filter);
  };

  const handleInputFilter = (event) => {
    const filter = event.target.value;
    setTextFilter(filter);
  };

  return (
    <FormFiltersContainer>
      <CustomButton onClick={openContactForm}>+</CustomButton>
      <InputsContainer>
        <input
          type="text"
          placeholder="Buscar..."
          onChange={handleInputFilter}
        />
        <select onChange={handleFilterChange}>
          {filterOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </InputsContainer>
    </FormFiltersContainer>
  );
};
