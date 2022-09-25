import axios from "axios";
import Image from "next/future/image";
import { X } from "phosphor-react";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import {
  BuyButton,
  CartItem,
  CartItemContentContainer,
  CartItemHeadingContainer,
  CartItemImageContainer,
  CartItensWrapper,
  Close,
  Content,
  Overlay,
  Portal,
  Root,
  Title,
} from "./styles";

export function CartDialog() {
  const {
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    cartCount,
    formattedTotalPrice,
    redirectToCheckout,
  } = useShoppingCart();
  const [isCreatingCheckoutSection, setIsCreatingCheckoutSection] =
    useState(false);

  async function handleRedirectToCheckout() {
    try {
      setIsCreatingCheckoutSection(true);
      const products = Object.keys(cartDetails).map((product) => ({
        price: cartDetails[product].priceId,
        quantity: cartDetails[product].quantity,
      }));
      const response = await axios.post("/api/stripe/checkout", { products });
      window.location.href = response.data.checkoutUrl;
    } catch (error) {
      setIsCreatingCheckoutSection(false);
    }
  }

  return (
    <Root open={shouldDisplayCart} onOpenChange={handleCartClick}>
      <Portal>
        <Overlay />
        <Content>
          <Close>
            <X size={24} />
          </Close>
          <Title>Shopping Cart</Title>

          <CartItensWrapper>
            {Object.keys(cartDetails).map((key) => (
              <CartItem key={cartDetails[key].id}>
                <CartItemImageContainer>
                  <Image
                    src={cartDetails[key].imageUrl}
                    width={90}
                    height={90}
                    alt=""
                  />
                </CartItemImageContainer>

                <CartItemContentContainer>
                  <CartItemHeadingContainer>
                    <h4>{cartDetails[key].name}</h4>
                    <small>{cartDetails[key].quantity}</small>
                  </CartItemHeadingContainer>
                  <strong>{cartDetails[key].formattedValue}</strong>

                  <button onClick={() => removeItem(cartDetails[key].id)}>
                    Remover
                  </button>
                </CartItemContentContainer>
              </CartItem>
            ))}
          </CartItensWrapper>

          <footer>
            <div className="quantity">
              Quantidade
              <span>{cartCount}</span>
            </div>

            <div className="total">
              Valor total
              <strong>{formattedTotalPrice}</strong>
            </div>

            <BuyButton
              disabled={isCreatingCheckoutSection}
              onClick={handleRedirectToCheckout}
            >
              Finalizar compra
            </BuyButton>
          </footer>
        </Content>
      </Portal>
    </Root>
  );
}
