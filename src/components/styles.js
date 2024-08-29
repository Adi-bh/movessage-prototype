import { createGlobalStyle } from 'styled-components';

const Container = createGlobalStyle`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Canvas = createGlobalStyle`
  width: 100%;
  height: 100vh;
  border: 1px solid black;
`;

export { Container, Canvas };