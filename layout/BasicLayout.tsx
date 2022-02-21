import { createGlobalStyle } from "styled-components";
import { ORANGE } from "../constants/colors";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background-color: rgb(245,245,245);
    font-size: 16px;
    padding: 1rem;
  }

  h1, h2, h3, h4, a {
    color: ${ORANGE};
    text-transform: uppercase;
  }
`;

export default function BasicLayout({ children }: { children: any }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
