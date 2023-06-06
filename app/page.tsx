"use client";
import Image from "next/image";
import { Row, Col } from "antd/es/grid";
import { Button } from "antd";
import Link from "next/link";
import { products } from "./constants";

export default function Home() {
  return (
    <main>
      <h2 className="text-center text-2xl font-bold p-4">Our Products</h2>

      <Row>
        {products.map((product) => (
          <Col
            key={product.id}
            span={3}
            className="shadow shadow-gray-300 text-center p-2 pb-3 min-w-[200px] max-w-[100%] m-2 rounded-md bg-slate-50"
          >
            <Image
              src={product.image}
              alt={`${product.name} image`}
              width={200}
              height={200}
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold text-slate-950 my-1">
              {product.name}
            </h3>
            <p className="my-2 font-semibold">{product.price}</p>

            <Button type="primary" className="p-0 bg-blue-500">
              <Link
                href={`/${product.id}`}
                className="block h-full py-[4px] px-[15px]"
              >
                Place Order
              </Link>
            </Button>
          </Col>
        ))}
      </Row>
    </main>
  );
}
