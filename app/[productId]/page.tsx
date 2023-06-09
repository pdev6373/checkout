"use client";
import { products } from "../constants";
import { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { ProductType } from "@/types";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface CheckoutType {
  params: { productId: string };
}

interface FormType {
  firstname: string;
  lastname: string;
  email: string;
  productname: string;
  amount: number;
}

interface PayloadType extends FormType {
  currencyCode: string;
  currencyType: string;
}

export default function Checkout({ params }: CheckoutType) {
  const [product, setProduct] = useState({} as ProductType);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setProduct(
      products.find((product) => product.id.toString() == params.productId) ||
        ({} as ProductType)
    );
  }, []);

  const handleMakePayment = async (values: PayloadType): Promise<any> => {
    setLoading(true);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/transactions/checkout`,
      {
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    if (!res.ok) {
      setError("Failed to fetch data");
      setLoading(false);
      setSuccess(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
    return res.json();
  };

  if (!product?.id) return <></>;

  return (
    <div className="flex  items-center justify-center min-h-screen">
      {!success ? (
        <div className="shadow w-full max-w-lg px-4 py-8 sm:p-8 rounded-lg border border-neutral-200 border-solid">
          <Form
            layout="vertical"
            name="checkoutForm"
            onFinish={(values: FormType) =>
              handleMakePayment({
                ...values,
                productname: product.name,
                amount: Number(product.price),
                currencyCode: product.currencyCode,
                currencyType: "FIAT",
              })
            }
            autoComplete="off"
          >
            <div className="sm:flex justify-between sm:gap-5 flex-wrap">
              <Form.Item
                label="First Name"
                name="firstname"
                rules={[
                  { required: true, message: "Please enter your first name" },
                ]}
                className="grow mb-3 sm:mb-4"
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="lastname"
                rules={[
                  { required: true, message: "Please enter your last name" },
                ]}
                className="grow mb-3 sm:mb-4"
              >
                <Input size="large" />
              </Form.Item>
            </div>

            <Form.Item
              label="Email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
              name="email"
              className="mb-3 sm:mb-4"
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item label="Item" name="productname" className="mb-3 sm:mb-4">
              <Input size="large" disabled placeholder={product.name} />
            </Form.Item>

            <Form.Item label="Price" name="amount" className="mb-4.5">
              <Input
                size="large"
                disabled
                placeholder={`${product.price} ${product.currencyCode}`}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
              >
                {loading ? "Please wait.." : "Make payment"}
              </Button>
            </Form.Item>
          </Form>

          {error ? (
            <p className="text-center text-orange-700">{error}</p>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="bg-white p-6  md:mx-auto border border-neutral-200 border-solid shadow rounded-lg text-center">
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Payment Done!
            </h3>
            <p className="text-gray-600 my-2">
              Thank you for completing your secure online payment.
            </p>
            <p> Have a great day! </p>
            <div className="py-10 text-center">
              <Link
                href="/"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 block rounded-lg no-underline text-center mb-1"
              >
                GO BACK
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
