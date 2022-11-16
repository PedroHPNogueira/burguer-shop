import styled  from "styled-components";

export const ProductListUl = styled.ul`

    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    gap: 20px;

    padding: 20px 0;

    @media (min-width: 762px){
        /* width: 68%; */
        overflow-x: unset;
        flex-wrap: wrap;

        padding: 50px 0;
    }
`