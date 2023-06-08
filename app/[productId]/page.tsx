"use client";
import { products } from "../constants";
import { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { ProductType } from "@/types";

type CheckoutType = {
  params: { productId: string };
};

export default function Checkout({ params }: CheckoutType) {
  const [product, setProduct] = useState({} as ProductType);

  useEffect(() => {
    setProduct(
      products.find((product) => product.id.toString() == params.productId) ||
        ({} as ProductType)
    );
  }, []);

  if (!product?.id) return <></>;

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Form
        layout="vertical"
        name="checkoutForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="shadow w-full max-w-lg px-4 py-8 sm:p-8 rounded-lg border border-neutral-200 border-solid"
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
            rules={[{ required: true, message: "Please enter your last name" }]}
            className="grow mb-3 sm:mb-4"
          >
            <Input size="large" />
          </Form.Item>
        </div>

        <Form.Item
          label="Email"
          rules={[
            { required: true, message: "Please enter your email address" },
          ]}
          name="email"
          className="mb-3 sm:mb-4"
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item label="Item" name="item" className="mb-3 sm:mb-4">
          <Input size="large" disabled placeholder={product.name} />
        </Form.Item>

        <Form.Item label="Price" name="price" className="mb-4.5">
          <Input size="large" disabled placeholder={product.price} />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full"
            size="large"
          >
            Make payment
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
