import React from "react";
import { Head } from "./style";
import logo from "../../assets/logo.svg"
import { Input } from "../../styles/input";
import { Button } from "../../styles/button";

function Header({setFilterSearch, filterProducts, filterSearch}){

    return (
        <Head>
            <h1>Burguer Shop</h1>
            <div>
                <Input 
                    value={filterSearch}
                    onChange={(e) => {setFilterSearch(e.target.value)}} placeholder="Pesquisar">
                </Input>
                <Button 
                type="buttonPrimary"
                onClick={() => {filterProducts()}}
                >Pesquisar</Button>
            </div>
        </Head>
    )
}

export default Header