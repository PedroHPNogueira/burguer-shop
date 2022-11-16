import styled from "styled-components";

export const CartDiv = styled.aside`

    margin-bottom: 30px;

    .cartHeader{
        display: flex;
        align-items: center;

        height: 65px;
        margin-top: 30px;
        padding: 0 5%;
        border-radius: 5px 5px 0 0;

        background-color: var(--color-primary);
        color: white;
        font-weight: 700;
        font-size: 18px;
    }

    .emptyCart{
        height: 160px;
        background-color: var(--grey-0);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`