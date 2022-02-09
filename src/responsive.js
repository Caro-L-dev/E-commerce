import {css} from "styled-components";

export const mobileDevice = (props) => {
    return css`
        // 380px ~ Small screen
        @media only screen and (max-width: 23.75rem){
            ${props};
        }
    `;
};