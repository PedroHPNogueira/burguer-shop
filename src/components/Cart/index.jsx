import React from "react";

import { CartDiv } from "./style";
import CartProduct from "./CartProduct";
import { Text } from "../../styles/text";
import TotalValue from "./TotalValue";

function Cart({currentSale, removeFromCart, setCurrentSale}){
    return (
        <CartDiv>
            <div className="cartHeader">
                <p>Carrinho de compras</p>
            </div>
            
            {
                currentSale.length > 0 ?
                <>
                    <ul>
                    {currentSale.map(elem => {
                        return (
                            <CartProduct removeFromCart={removeFromCart} key={elem.id} elem={elem}></CartProduct>
                        )
                    })} 
                    </ul>
                    <TotalValue currentSale={currentSale} setCurrentSale={setCurrentSale}></TotalValue>
                </>
                : 
                <div className="emptyCart">
                    <Text type="tittle2">Sua sacola está vazia</Text>
                    <Text type="text2">Adicione itens</Text>
                </div>
            }
            
        </CartDiv>
    )
}

export default Cart