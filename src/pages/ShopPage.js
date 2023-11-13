import React, {useState} from 'react';

import {
    AddToCartButton, Cart, CartContainer, CartItem, ContentContainer, ProductCard,
    ProductGrid,
    ProductName,
    ProductPrice,
    ShopContainer,
    ShopHeader, Total
} from "../components/StyledComponents";
import {products} from "../data";






function Product(props) {
    const { product, addToCart } = props;

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <ProductCard>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>€{product.price}</ProductPrice>
            <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
        </ProductCard>
    );
}

export function ShopPage() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price, 0);
    };

    return (
        <ShopContainer>
            <ShopHeader>
                <h1>Anime Shop</h1>
            </ShopHeader>
            <ContentContainer>
                <ProductGrid>
                    {products.map((product) => (
                        <Product key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </ProductGrid>
                <CartContainer>
                    <Cart>
                        <h2>Shopping Cart</h2>
                        <Total>Total: €{calculateTotal()}</Total>
                        <ul>
                            {cart.map((item) => (
                                <CartItem key={item.id}>
                                    {item.name} - €{item.price}
                                </CartItem>
                            ))}
                        </ul>

                    </Cart>
                </CartContainer>
            </ContentContainer>
        </ShopContainer>
    );
}