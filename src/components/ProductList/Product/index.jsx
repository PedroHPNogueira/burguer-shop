import React from "react";

import { ProductLi } from "./style";
import { Text } from "../../../styles/text";
import { Button } from "../../../styles/button";

function Product({elem, addToCart}){
    return (
        <ProductLi>
            <div>
                <img src={elem.img} alt="" />
            </div>
            <Text type="tittle2">{elem.name}</Text>
            <Text type="text2">{elem.category}</Text>
            <Text type="price">R$ {elem.price.toFixed(2).toString().replace(".",",")}</Text>
            <Button 
                onClick={() => {
                    addToCart(elem.id)
                }}
                type="buttonPrimary">
                Adicionar
            </Button>
        </ProductLi>
    )
}

export default Product