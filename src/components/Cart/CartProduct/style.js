import styled from "styled-components";

export const CartProductLi = styled.li`

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 80px;
    width: 100%;
    background-color: var(--grey-0);
    padding: 10px;

    div {
        display: flex;
        flex-direction: row;
    }

    .imgDiv{
        background-color: var(--grey-20);
        position: relative;
    }

    .imgDiv img {
        height: 60px;
    }

    .imgDiv span {
        position: absolute;
        top: 0px;
        right: 0px;
        background-color: var(--color-primary);
        border-radius: 50%;
        padding: 5px;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 10px;
        font-weight: 600;
        color: white;

        transform: translate(5px, -5px);
    }

    .descriptionDiv {
        display: flex;
        flex-direction: column;

        margin-left: 15px;
        padding-top: 5px;
    }

    button {
        margin-bottom: 20px;
    }
`