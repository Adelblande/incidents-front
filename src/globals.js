import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    ul {
      list-style: none;
    }
  }
  button {
    border: 0;
  }
  a {
    text-decoration: none;
  }
`;