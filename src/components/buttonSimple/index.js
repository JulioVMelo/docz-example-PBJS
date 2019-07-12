import React from 'react';
import type from 'prop-types';
import { ButtonStyled } from './styles';

const Button = (props) => (
  <ButtonStyled> { props.text } </ButtonStyled>
);

Button.propTypes = {
  /**
   * Comments here
   */
  text: type.string,
};

Button.defaultProps = {
  text: 'Paraiba JS'
};

export default Button;
