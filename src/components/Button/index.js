import { ButtonContainer } from "./styles";

const Button = ({action}) => {
  return (
    <ButtonContainer onClick={action} > 
      Buscar
    </ButtonContainer>
  );
};

export default Button;
