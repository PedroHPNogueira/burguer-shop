import styled, { css } from "styled-components";

export const Text = styled.p`

    ${({type}) => {

        if (type === "text1"){
            return css`
                font-size: 21px;
                font-weight: 700;
                line-height: 34px;
                color: var(--grey-50);
                
                @media (min-width: 762px){
                    font-size: 26px;
                }
            `
        } else if(type === "tittle1"){
            return css`
                font-size: 21px;
                font-weight: 700;
                line-height: 34px;
                color: var(--black);

                @media (min-width: 762px){
                    font-size: 26px;
                }
            `
        } else if(type === "text2"){
            return css`
                font-size: 12px;
                font-weight: 700;
                line-height: 16px;
                color: var(--grey-50)
            `
        } else if(type === "tittle2"){
            return css`
                font-size: 18px;
                font-weight: 700;
                line-height: 24px;
                color: var(--black);
            `
        } else if(type === "price"){
            return css`
                font-size: 14px;
                font-weight: 600;
                line-height: 24px;
                color: var(--color-primary);
            `
        } else if(type === "tittle3"){
            return css`
                font-size: 14px;
                font-weight: 700;
                line-height: 24px;
                color: var(--black);
            `
        }
    }}
    
    
`