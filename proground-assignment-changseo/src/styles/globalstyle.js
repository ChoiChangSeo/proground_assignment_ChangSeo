import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 * {
  font-family: Arial, Helvetica, sans-serif !important;
   box-sizing:border-box;
   outline:none;
   border:none;
 }

 html,
body {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
ul{
  list-style:none
}
`;

export default GlobalStyles;
