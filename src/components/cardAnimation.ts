import { keyframes, css } from "styled-components";

const animation = (random: number) => {
  const rotate = `rotate(${random * 4 - 2}deg)`;
  const translateX = `translateX(${random * 5}px)`;
  const translateY = `translateY(${random * 100}px)`;

  return keyframes`
    0% {
      opacity: 0;
      transform: ${rotate} ${translateX} ${translateY};
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: rotate(0deg) translateY(0) translateX(0);
    }
  `;
};

export default css`
  animation: ${(p: { random: number }) =>
    css`
      ${animation(p.random)} 0.75s cubic-bezier(0.61, 1, 0.88, 1) forwards
    `};
`;
