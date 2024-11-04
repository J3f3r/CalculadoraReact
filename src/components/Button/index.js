import {ButtonContainer} from './styles';

const Button = ({label, onClick}) => {// trocando a function por Arrow Function
    return (
      <ButtonContainer onClick = {onClick} type = "button">
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;