import styled from "styled-components";

export const Search = styled.div`

    display: flex;
    flex: row;
    justify-content: space-between;

    padding: 50px 5% 20px;

    transition: .3s;
    
    div {
        display: flex;
        flex-direction: row;
        gap: 5px;
    }

    button{
        display: none;
        
        @media (min-width: 762px){
            display: unset;
        }
    }
`