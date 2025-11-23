import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { ConfigProvider, Select, theme } from "antd";
import { useSelector } from "react-redux";

// work with functionalities
const FormCom = ({ req }) => {
  let [formData] = Form.useForm();

  const onFinish = (values) => {
    req(values);
    formData.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // from select dark mode/functions
  let darkMode = useSelector((e) => e.slices.darkMode);
  let [isDark, setIsDark] = useState(darkMode);

  useEffect(() => {
    setIsDark(darkMode);
  }, [darkMode]);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Form
        name="basic"
        layout="vertical"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{ status: "", city: "" }}
        form={formData}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please, input your name!" }]}
        >
          <Input placeholder="Input your name" minLength={5} maxLength={15} />
        </Form.Item>

        <Form.Item
          name="surname"
          rules={[{ required: true, message: "Please input your surname!" }]}
        >
          <Input
            size="middle"
            placeholder="Input your surname"
            minLength={5}
            maxLength={15}
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your E-mail!" },
            { type: "email", message: "The input is not valid E-mail!" },
          ]}
        >
          <Input size="middle" type="email" placeholder="Input your email" />
        </Form.Item>
        <Form.Item
          name="mobile_phone"
          rules={[
            { required: true, message: "Please input your phone numbers" },
            {
              pattern: "[0-9]{9}",
              message: "Phone numbers must be 9 digits (numbers only)!",
            },
          ]}
        >
          <Input
            size="middle"
            type="text"
            placeholder="Input your phone numbers"
          />
        </Form.Item>
        <Form.Item
          name="img"
          rules={[{ required: true, message: "Please, input your image" }]}
        >
          <Input size="middle" placeholder="Input your image" />
        </Form.Item>
        {/* select */}
        <div className="flex justify-between gap-3 pb-2">
          <Form.Item
            name="status"
            rules={[{ required: true, message: "Please, select a status" }]}
          >
            <Select
              className="shadow-[0_0_5px_#ccc] rounded-md w-full"
              options={[
                { value: "", label: "All status" },
                { value: "ACTIVE", label: "Active" },
                { value: "INACTIVE", label: "Inactive" },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="city"
            rules={[{ required: true, message: "Please, select a city" }]}
          >
            <Select
              className="shadow-[0_0_5px_#ccc] rounded-md w-full"
              options={[
                { value: "", label: "All cities" },
                { value: "dushanbe", label: "Dushanbe" },
                { value: "Bokhtar", label: "Bokhtar" },
                { value: "Kulob", label: "Kulob" },
                { value: "Hisor", label: "Hisor" },
                { value: "Khujand", label: "Khujand" },
              ]}
            />
          </Form.Item>
        </div>

        <Form.Item label={null}>
          <button className="border p-[5px_12px] rounded-md shadow-[0_0_5px_#ccc] bg-gradient-to-tr from-blue-500 text-[#fff] to-blue-700  dark:bg-gradient-to-t dark:from-black dark:to-black dark:shadow-none">
            Submit
          </button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default FormCom;
