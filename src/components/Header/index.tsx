import Image from "next/future/image";
import logoImg from "../../assets/logo.svg";

import { Header as HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="Logo" />
    </HeaderContainer>
  );
}
