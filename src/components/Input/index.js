import {InputContainer} from './styles';

const Input = ({value}) => {// trocando a function por Arrow Function
    return (
      <InputContainer>
        <Input disable value={value}/>
      </InputContainer>
    );
  }
  
  export default Input;