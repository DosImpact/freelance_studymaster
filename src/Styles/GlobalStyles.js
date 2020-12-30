import { createGlobalStyle } from "styled-components";
import Theme from "./Theme";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};

    *{
        box-sizing: border-box;
    }

    body{
        font-family: 'Noto Sans KR', sans-serif;
    }
    a {
        color:${(props) => props.theme.blackColor};
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }

    .mainColor{
        ${Theme.ColorMain};
    }
    /* unused */
    .black{
        color:${(props) => props.theme.blackColor};
    } 
    .brown{
        color:${(props) => props.theme.brownColor};
    }
    .w4{
        font-weight:400;
    }
    .w5{
        font-weight:500;
    }
    .w6{
        font-weight:600;
    }
    .w7{
        font-weight:700;
    }
    .ss{
        font-size:0.75em;
    }
    .sm{
        font-size:1em;
    }
    .sl{
        font-size:1.25em;
    }
    .sll{
        font-size:1.5em;
    }
    
`;
