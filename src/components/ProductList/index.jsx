import React from "react";

import { ProductListUl } from "./style";
import Product from "./Product";

function ProductList({filteredProducts, addToCart}){
    return (
        <ProductListUl>
            {filteredProducts.map((elem) => {
                return (<Product key={elem.id} elem={elem} addToCart={addToCart}></Product>)
            })}
        </ProductListUl>
    )
}

export default ProductList