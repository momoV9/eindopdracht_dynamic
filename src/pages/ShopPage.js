import React from 'react';

import {
    AddToCartButton, ProductCard,
    ProductGrid,
    ProductName,
    ProductPrice,
    ShopContainer,
    ShopHeader
} from "../components/StyledComponents";
import {products} from "../data";







function Product(props) {
    const { product } = props;

    return (
        <ProductCard>

            <ProductName>{product.name}</ProductName>
            <ProductPrice>€{product.price}</ProductPrice>
            <AddToCartButton>Add to Cart</AddToCartButton>
        </ProductCard>
    );
}

export function ShopPage() {


    return (
        <ShopContainer>
            <ShopHeader>
                <h1>Anime Shop</h1>
            </ShopHeader>
            <ProductGrid>
                {products.map((product) => (
                    <Product key={product.id} product={product}/>
                ))}
            </ProductGrid>
        </ShopContainer>
    );
}

