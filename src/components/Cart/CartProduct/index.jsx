import React from "react";

import { CartProductLi } from "./style";
import { Text } from "../../../styles/text";
import { Button } from "../../../styles/button";

function CartProduct({elem, removeFromCart}){
    return (
        <CartProductLi>
            <div>
                <div className="imgDiv">
                    <img src={elem.img} alt="" />
                    {
                        elem.count > 1 ? 
                        <span>{elem.count}</span>
                        : null
                    }
                </div>
                <div className="descriptionDiv">
                    <Text type="tittle3">{elem.name}</Text>
                    <Text type="text2">{elem.category}</Text>
                </div>
            </div>
            <Button 
                onClick={() => {
                    removeFromCart(elem.id)
                }}
                type="buttonText">
                Remover
            </Button>
        </CartProductLi> 
        
    )
}

export default CartProduct