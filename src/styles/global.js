import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    color: var(--main);
    max-width: 100%;
  }

  body {
    background: var(--lightBackground);
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px Poppins, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    margin-top: 100px;
  }

    :root {
    /* MARROM */
    --marrom-escuro: #4E342E;
    --marrom-medio: #795548;
    --marrom-claro: #A1887F;

    /* BEGE */
    --bege-claro: #F5F0E6;
    --bege-medio: #E6D5B8;
    --bege-quente: #D7C4A3;

    /* BRANCO */
    --branco: #FFFFFF;

    /* MAPEAMENTO PARA O SISTEMA ATUAL DO SITE */
    --coupleName: var(--marrom-escuro);
    --menu: var(--marrom-escuro);
    --content: var(--marrom-medio);
    --title-text-color: var(--marrom-escuro);
    --main: var(--marrom-escuro);
    --body: var(--branco);
    --formBorder: var(--bege-medio);
    --lightBackground: var(--bege-claro);
    --darkBackground: var(--marrom-escuro);
    --transparentBackground: rgba(0,0,0,0);
    --alert: #ef5350;
    --error: #ef5350;

    /* FONTES (mantidas) */
    --base-font-family: "poppins-light";
    --menu-font-family: "BarlowCondensed";
    --title-font-family: "BarlowCondensed";
    --name-font-family: "Barlow-Medium";
  }
`;
