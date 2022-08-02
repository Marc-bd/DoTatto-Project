import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
 
    
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: "Inter";
        

      
       
    }

    :root {
        --toastify-color-light: #fff;
        --toastify-color-success: #fff;
        --toastify-color-error: #fff;
        --grey: #454545;
        --red: #ff0000;
        --white: #ffff;
        --black: #000
    }
    button{
        cursor: pointer;
    }

    a{
        text-decoration:none
    }

  *::-webkit-scrollbar {
    width: 1px;
    height: 1px;
    background-color: #000;
  }
  *::-webkit-scrollbar-track {
    background: var(--black);
  }
  *::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 2px;
    border: 1px solid transparent;
  }
 /*
  &::-webkit-scrollbar {
    width: 5px;
    background-color: #000;
  }

  &::-webkit-scrollbar-thumb {
     background-color: var(--white);
    border-radius: 2px;
    border: 1px solid var(--white);
  }
*/

`;
