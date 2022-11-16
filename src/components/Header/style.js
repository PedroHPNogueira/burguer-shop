import styled from "styled-components";

export const Head = styled.header`

    position: sticky;
    z-index: 100;
    top: 0;
    display: flex;
    flex-direction: column;
    padding: 15px 5%;
    gap: 15px;

    background-color: #f5f5f5;

    h1{
        font-size: 28px;
        font-weight: 700;
    }

    img{
        height: 35px;
    }

    div{
        position: relative;
    }

    input{
        width: 100%;
    }

    button{
        position: absolute;
        right: 10px;
        top: 10px;
    }

    @media (min-width: 762px){
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: center;

        input{
            width: 365px;
        }
    }
`