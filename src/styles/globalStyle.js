import { createGlobalStyle } from "styled-components";

export const GlobalStyleStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
    }

    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    } 
`;
