import { ButtonsContainer, CustomButtons } from "./styles";

export const ActionButtons = () => {
  return (
    <ButtonsContainer>
      <CustomButtons>
        <img style={{ width: "25px" }} src="src\assets\edit.png" alt="Editar" />
      </CustomButtons>
      <CustomButtons>
        <img
          style={{ width: "22px", marginRight: "15px" }}
          src="src\assets\erase.png"
          alt="Remover"
        />
      </CustomButtons>
    </ButtonsContainer>
  );
};
