import * as React from 'react';
import StyledButton from './ButtonStyles';

interface ButtonProps {
  fontColor?: string;
  backgroundColor?: string;
  invert?: boolean;
}

/**
 * Re-usable button component for Twitter
 * @Props 
 * @param {string} fontColor - fontColor to override default
 * @param {string} backgroundColor - backgroundColor to override default
 * @param {boolean} invert - if true, invert twitter colors
 */

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton {...props}>
      Test
    </StyledButton>
  );
};


export default Button;
