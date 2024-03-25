import { InputContainer } from "./styles";

const Input = ({ value, action }) => {
  return (
    <InputContainer>
      <input
        value={value}
        onChange={(e) => {
          action(e.target.value);
        }}
      />
    </InputContainer>
  );
};

export default Input;
