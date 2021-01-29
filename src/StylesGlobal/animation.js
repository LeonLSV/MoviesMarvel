import { css, keyframes } from "styled-components";

const FadeInKeyframes = keyframes`
  from{
    
    opacity: 0;
  }
  to{
    
    opacity: 100;
  }
`;

export const fadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${FadeInKeyframes} ${type};
  `;
