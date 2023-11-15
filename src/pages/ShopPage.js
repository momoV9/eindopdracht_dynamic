import React, { useEffect, useState } from 'react'
import {
  AddToCartButton,
  Cart,
  CartContainer,
  CartItem,
  ContentContainer,
  ProductCard,
  ProductGrid,
  ProductName,
  ProductPrice,
  RemoveButton,
  ShopContainer,
  ShopHeader,
  Total,
} from '../components/StyledComponents'
import { products } from '../data'

function Product({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setQuantity(1)
  }

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10)
    setQuantity(value)
  }

  return (
    <ProductCard>
      <ProductName>
        {product.name} {product.quantity && `x${product.quantity}`}
      </ProductName>
      <ProductPrice>€{product.price}</ProductPrice>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
    </ProductCard>
  )
}

export function ShopPage() {
  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'))
    return storedCart || []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product, quantity) => {
    const existingProduct = cart.find((item) => item.id === product.id)

    if (existingProduct) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + quantity }
        }
        return item
      })

      setCart(updatedCart)
    } else {
      setCart([...cart, { ...product, quantity }])
    }
  }

  const removeFromCart = (productId) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })
      .filter((item) => item.quantity > 0)
    setCart(updatedCart)
  }

  const calculateTotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    )
  }

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
        {cart.length > 0 && (
          <CartContainer>
            <Cart>
              <h2>Shopping Cart</h2>
              <Total>Total: €{calculateTotal()}</Total>
              <ul>
                {cart.map((item) => (
                  <CartItem key={item.id}>
                    {item.name} - €{item.price} - Quantity: {item.quantity}
                    <RemoveButton onClick={() => removeFromCart(item.id)}>
                      Remove
                    </RemoveButton>
                  </CartItem>
                ))}
              </ul>
            </Cart>
          </CartContainer>
        )}
      </ContentContainer>
    </ShopContainer>
  )
}
