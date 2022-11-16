import styled from "styled-components";

export const Main = styled.main`

    .body{
        display: flex;
        flex-direction: column;
        

        padding: 0 5%;
    }

    .body > aside {
        margin-top: 20px;
    }

    @media (min-width: 762px){
        .body{
            flex-direction: row;
            justify-content: space-between;
        }

        .body > div {
            width: 68%;
        }

        .body > aside {
            width: 365px;
        }
    }
`