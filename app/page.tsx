"use client";
import Image from "next/image";
import Link from "next/link";
import { products } from "./constants";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-2 sm:px-1 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl mb-4 font-semibold">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group border rounded-lg p-2 border-neutral-200 border-solid"
            >
              <div className="">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center rounded-lg"
                  width={300}
                  height={360}
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900 mb-2">
                {product.price}
              </p>

              <Link
                href={product.id.toString()}
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 block rounded-lg no-underline text-center mb-1"
              >
                Place an order
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
