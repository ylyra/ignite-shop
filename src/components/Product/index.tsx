import Image from "next/future/image";
import Link from "next/link";
import { formatPrice } from "../../utils/format";
import { ProductContainer } from "./styles";

type ProductProps = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
};

export function Product({ name, price, id, imageUrl }: ProductProps) {
  return (
    <Link href={`/products/${id}`} passHref prefetch={false}>
      <ProductContainer>
        <Image
          src={imageUrl}
          width={520}
          height={480}
          alt="T-shit"
          loading="lazy"
        />

        <footer>
          <strong>{name}</strong>
          <span>{price}</span>
        </footer>
      </ProductContainer>
    </Link>
  );
}
