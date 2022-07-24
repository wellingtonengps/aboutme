import styled from "styled-components";

export const Container = styled.button`
  color: #fff;
  background-color: #333;
  transition-delay: 1s;
  border: 0;
  padding: 0;
  height: 40px;
  width: 40px;

  svg {
    fill: currentColor;
    color: #fff;
    border-radius: 100%;
  }

  :hover {
    svg {
      background-color: #fff;
      color: #333;
    }
  }
`;
