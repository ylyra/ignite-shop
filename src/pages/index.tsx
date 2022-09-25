import { useKeenSlider } from "keen-slider/react";
import { GetStaticProps, NextPage } from "next";
import type { Stripe } from "stripe";
import { Product } from "../components/Product";
import { HomeContainer } from "../styles/pages/home";

import "keen-slider/keen-slider.min.css";
import Head from "next/head";
import { stripe } from "../lib/stripe";

type HomeProps = {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
};

const IndexPage: NextPage<HomeProps> = ({ products }) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: "auto",
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <div key={product.id} className="keen-slider__slide">
            <Product {...product} />
          </div>
        ))}
      </HomeContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await stripe.products.list({
      expand: ["data.default_price"],
    });

    const products = response.data.map((product) => {
      const price = product.default_price as Stripe.Price;
      return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
      };
    });

    return {
      props: {
        products,
      },
      revalidate: 60 * 60 * 12, // will revalidate in 12 hours
    };
  } catch {
    return {
      props: {
        products: [],
      },
      revalidate: 1 * 60, // will revalidate in 1 minute,
    };
  }
};

export default IndexPage;
