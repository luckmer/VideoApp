import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle` 
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
  word-break: break-word;
}

iframe{
  max-width:100%;
  height:700px;
}


`;

export default globalStyle;
