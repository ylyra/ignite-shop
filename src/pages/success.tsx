import { GetServerSideProps, NextPage } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import type { Stripe } from "stripe";
import { useShoppingCart } from "use-shopping-cart";
import { stripe } from "../lib/stripe";
import {
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from "../styles/pages/success";

type SuccessProps = {
  customerName: string;
  totalQuantity: number;
  products: {
    id: string;
    name: string;
    imageUrl: string;
    quantity: number;
  }[];
};

const SuccessPage: NextPage<SuccessProps> = ({
  customerName,
  totalQuantity,
  products,
}) => {
  const { clearCart } = useShoppingCart();
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <>
      <Head>
        <title>Compra efetuada - Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <ImagesContainer>
          {products.map((product) => (
            <ImageContainer key={product.id}>
              <Image src={product.imageUrl} alt="" width={130} height={132} />
              <span>{product.quantity}</span>
            </ImageContainer>
          ))}
        </ImagesContainer>

        <p>
          Uhuuul <strong>{customerName}</strong>, sua compra de {totalQuantity}{" "}
          camisetas já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const session_id = ctx.query.session_id as string;

    if (!session_id) throw new Error("Missing session_id");

    const response = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["line_items", "line_items.data.price.product"],
    });

    const customerName = response.customer_details.name;
    const products = response.line_items.data.map((lineItem) => {
      const product = lineItem.price.product as Stripe.Product;
      return {
        ...product,
        quantity: lineItem.quantity,
      };
    });

    return {
      props: {
        customerName,
        totalQuantity: products.reduce((oldQuantity, product) => {
          return oldQuantity + product.quantity;
        }, 0),
        products: products.map((product) => ({
          id: product.id,
          name: product.name,
          imageUrl: product.images[0],
          quantity: product.quantity,
        })),
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default SuccessPage;
