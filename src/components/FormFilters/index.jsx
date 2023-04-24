import { FormFiltersContainer, CustomButton, InputsContainer } from "./styles";

export const FormFilters = ({
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
      text: "Email",
      value: "email",
    },
    {
      text: "Telefone",
      value: "phone",
    },
    {
      text: "Nascimento",
      value: "birth",
    },
    {
      text: "Cidade",
      value: "city",
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
