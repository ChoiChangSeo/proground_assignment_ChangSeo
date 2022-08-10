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
  width: 1200px;
  height: auto;
  padding: 0;
  margin: 0;
  display: flex;
  border: 1px solid blue;
}
ul{
  list-style:none
}
`;

export default GlobalStyles;
