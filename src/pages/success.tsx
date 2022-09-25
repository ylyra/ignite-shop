import { GetServerSideProps, NextPage } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import type { Stripe } from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

type SuccessProps = {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
};

const SuccessPage: NextPage<SuccessProps> = ({ customerName, product }) => {
  return (
    <>
      <Head>
        <title>Compra efetuada - Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={120} height={110} />
        </ImageContainer>

        <p>
          Uhuuul <strong>{customerName}</strong>, sua{" "}
          <strong>{product.name}</strong> já está a caminho da sua casa.
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
    const product = response.line_items.data[0].price.product as Stripe.Product;

    return {
      props: {
        customerName,
        product: {
          name: product.name,
          imageUrl: product.images[0],
        },
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
