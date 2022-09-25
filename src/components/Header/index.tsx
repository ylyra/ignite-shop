import Image from "next/future/image";
import Link from "next/link";
import { ShoppingBag, ShoppingBagOpen } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";
import logoImg from "../../assets/logo.svg";

import { Header as HeaderContainer } from "./styles";

export function Header() {
  const { shouldDisplayCart, handleCartClick, cartCount } = useShoppingCart();

  function handleOpenCart() {
    if (cartCount === 0) return;
    handleCartClick();
  }

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="Logo" />
      </Link>

      <button title="toggle cart drawer" onClick={handleOpenCart}>
        {shouldDisplayCart ? (
          <ShoppingBagOpen size={24} />
        ) : (
          <ShoppingBag size={24} />
        )}

        {cartCount > 0 && <span>{cartCount}</span>}
      </button>
    </HeaderContainer>
  );
}
