import React from "react";

import { Search } from "./style";
import { Text } from "../../styles/text";
import { Button } from "../../styles/button";

function SearchInfo({currentSearch, setFilterSearch, setFilteredProducts,products,setCurrentSearch}){
    return (
        <>
        {currentSearch !== "" ? 
            <Search>
                <div>
                    <Text type='tittle1'>Resultados para:</Text>
                    <Text type="text1">{currentSearch}</Text>
                </div>
                <Button 
                    onClick={() => {setFilterSearch(""); setFilteredProducts(products);setCurrentSearch("")}}
                    type="buttonPrimary">
                    Limpar busca
                </Button>
            </Search> : null
        }
        </>
    )
}

export default SearchInfo