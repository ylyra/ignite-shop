import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { Stripe } from "stripe";
import { HomeContainer } from "../../styles/pages/home";

import Image from "next/future/image";
import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";
import { formatPrice } from "../../utils/format";

type ProductProps = {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
  };
};

const ProductPage: NextPage<ProductProps> = ({ product }) => {
  return (
    <ProductContainer>
      <ImageContainer>
        <Image width={520} height={480} src={product.imageUrl} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>

        <span>{product.price}</span>

        <p>{product.description}</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = [];
  try {
    const response = await stripe.products.list();

    paths = response.data.map((product) => ({
      params: {
        id: product.id,
      },
    }));
  } catch {}

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const id = ctx.params.id as string;
    const response = await stripe.products.retrieve(id, {
      expand: ["default_price"],
    });

    const price = response.default_price as Stripe.Price;
    const product = {
      id: response.id,
      name: response.name,
      imageUrl: response.images[0],
      description: response.description,
      price: formatPrice(price.unit_amount / 100),
    };

    return {
      props: {
        product,
      },
      revalidate: 60 * 60 * 6, // will revalidate in 12 hours
    };
  } catch {
    return {
      props: {},
      notFound: true,
      revalidate: 1 * 60, // will revalidate in 1 minute,
    };
  }
};

export default ProductPage;
