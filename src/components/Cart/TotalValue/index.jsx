import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { TotalValueDiv } from "./style";
import { Button } from "../../../styles/button";

function TotalValue({currentSale, setCurrentSale}){
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        function calculateTotalValue(){
            let totalValue = currentSale.reduce((acum, current) => { 
                return (acum + (current.price * current.count))
            },0)
            
            setCartTotal(totalValue)
        }
        
        calculateTotalValue()
    }, [currentSale])

    return (
        <TotalValueDiv>
            <div>
                <p>Total</p>
                <span>R$ {cartTotal.toFixed(2).toString().replace(".",",")}</span>
            </div>
            <Button 
                onClick={() => {setCurrentSale([])}}
                type="buttonSecondary">
                Remover todos
            </Button>
        </TotalValueDiv>
    )
}

export default TotalValue