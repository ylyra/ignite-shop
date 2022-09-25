import { AppProps } from "next/app";
import { CartProvider } from "use-shopping-cart";
import { CartDialog } from "../components/CartDialog";
import { Header } from "../components/Header";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";

globalStyles();

function App({ Component, pageProps }) {
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}
      currency="BRL"
    >
      <Container>
        <Header />
        <Component {...pageProps} />
        <CartDialog />
      </Container>
    </CartProvider>
  );
}

export default App;
