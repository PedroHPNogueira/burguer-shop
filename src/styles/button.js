import styled, {css} from "styled-components";

export const Button = styled.button`

    ${({type}) => {

        if (type === "buttonPrimary"){
            return css`
                height: 40px;
                padding: 0 20px;
                border-radius: 8px;

                color: var(--white);
                background-color: var(--color-primary);

                align-items: center;
                text-align: center;

                cursor: pointer;
                transition: .2s;

                @media (min-width: 762px){

                    :hover{
                    background-color: var(--color-primary-50);
                }
                }
                
            `
        } else if (type === "buttonSecondary"){
            return css`
                height: 60px;
                padding: 0 20px;
                border-radius: 8px;

                color: var(--grey-50);
                font-size: 16px;
                font-weight: 600;
                background-color: var(--grey-20);

                align-items: center;
                text-align: center;

                cursor: pointer;
                transition: .2s;

                :hover{
                    background-color: var(--grey-50);
                    color: var(--grey-20);
                }
            `
        } else if(type === "buttonText"){
            return css`
                color: var(--grey-50);
                font-size: 12px;
                font-weight: 500;
                background-color: transparent;

                align-items: center;
                text-align: center;

                cursor: pointer;
                transition: .2s;

                :hover{
                    color: var(--black);
                }
            ` 
        }
    }}
`