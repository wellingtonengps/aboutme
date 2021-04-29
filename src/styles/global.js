import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body { 
        background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
        font-family: 'Lexend', sans-serif;
    }
`;

