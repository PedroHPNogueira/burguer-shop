import styled from "styled-components";

export const TotalValueDiv = styled.div`

    display: flex;
    flex-direction: column;
    height: 145px;
    background-color: var(--grey-0);
    border-top: 2px solid var(--grey-20);
    padding: 20px 5%;
    gap: 20px;

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    p{
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
    }

    span {
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
        color: var(--grey-50);
    }
`