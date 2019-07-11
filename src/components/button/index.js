import React from 'react';
import { ButtonUI } from './styles';
import PropTypes from 'prop-types';

const Button = (props) => <ButtonUI> {props.texto} </ButtonUI>

Button.propTypes = {
  texto: PropTypes.string,
  cor: PropTypes.string,
  tamanho: PropTypes.number
};

Button.defaultProps = {
  texto: "OK",
  cor: "#19181E",
  tamanho: 300
};

export default Button;
