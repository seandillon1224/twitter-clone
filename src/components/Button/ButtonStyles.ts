import styled from "styled-components";

interface ButtonProps {
  readonly invert?: boolean;
  readonly fontColor?: string;
  readonly backgroundColor?: string;
}

const StyledButton = styled.button<ButtonProps>`
  color: ${(props) =>
    props.invert
      ? props.theme.colors.blue
      : props.fontColor || props.theme.colors.white};
  background-color: ${(props) =>
    props.invert
      ? props.theme.colors.white
      : props.backgroundColor || props.theme.colors.blue};
`;

export default StyledButton;
