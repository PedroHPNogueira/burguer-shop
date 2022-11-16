import styled from "styled-components";

export const ProductLi = styled.li`

    height: 346px;
    min-width: 280px;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    border: 2px solid var(--grey-20);
    gap: 14px;

    div{
        height: 150px;
        width: 100%;
        background-color: var(--grey-0);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p{
        padding-left: 21px;
    }

    button {
        width: fit-content;
        margin-left: 21px;
    }
`