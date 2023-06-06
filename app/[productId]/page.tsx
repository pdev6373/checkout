// "use client";
// import Image from "next/image";
// import { products } from "../constants";
// import { useState } from "react";
// import { Button, Checkbox, Form, Input, Col, Row } from "antd";

// type CheckoutType = {
//   params: { productId: string };
// };

// export default function Checkout({ params }: CheckoutType) {
//   const [product, setProduct] = useState(
//     products.find((product) => product.id.toString() == params.productId)
//   );

//   if (!product?.id) return <></>;

//   const onFinish = (values: any) => {
//     console.log("Success:", values);
//   };

//   const onFinishFailed = (errorInfo: any) => {
//     console.log("Failed:", errorInfo);
//   };

//   return (
//     <Row className="tablet:flex-initial tablet:flex-row tablet:min-h-screen">
//       <Col className="bg-zinc-100 tablet:min-h-screen py-10 text-center w-full tablet:w-[40%] flex flex-col justify-center">
//         <Image
//           src={product.image}
//           alt={`${product.name} image`}
//           width={200}
//           height={200}
//           className="rounded-md mx-auto mb-5"
//         />

//         <h3 className="text-slate-950 text-xl font-semibold mb-2">
//           {product.name}
//         </h3>
//         <span className="font-semibold">Price: {product.price}</span>
//       </Col>

//       <Col className="my-auto mx-auto">
//         <h2 className="text-center text-2xl font-bold p-4">
//           Enter your Details
//         </h2>

//         <Form
//           name="checkout"
//           labelCol={{ span: 8 }}
//           wrapperCol={{
//             xs: { span: 16 },
//             sm: { span: 16 },
//             md: { span: 16 },
//             lg: { span: 16 },
//           }}
//           initialValues={{ remember: true }}
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//           autoComplete="off"
//           className="w-[100%] min-w-[100%] tablet:w-[85%] tablet:min-w-[400px]"
//         >
//           <Form.Item
//             label="Name"
//             name="name"
//             rules={[{ required: true, message: "Please enter your name" }]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item
//             label="Email"
//             name="email"
//             rules={[{ required: true, message: "Please enter your email" }]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item>
//             <Button
//               type="primary"
//               htmlType="submit"
//               className="bg-blue-500 ml-[80px] tablet:ml-[135px]"
//             >
//               Checkout
//             </Button>
//           </Form.Item>
//         </Form>
//       </Col>
//     </Row>
//   );
// }

import React from "react";

export default function page() {
  return <div>page</div>;
}
