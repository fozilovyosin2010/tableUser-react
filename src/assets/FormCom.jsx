import React, { useEffect, useState } from "react";
import { Form, Input } from "antd";
import { ConfigProvider, Select, theme } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setEditModal, setEditObj } from "../reducers/globSlice";

const FormCom = ({ req, type }) => {
  let disP = useDispatch();
  let [formData] = Form.useForm();

  // for edit modal - type
  let [obj, setObj] = useState(useSelector((e) => e.slices.editObj));

  const onFinish = (values) => {
    if (type == "addModal") {
      req(values);
      formData.resetFields();
    } else {
      req(obj.id, values);
      disP(setEditObj([]));
      disP(setEditModal(false));
      formData.resetFields();
    }
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
        initialValues={
          type == "editModal" && obj ? obj : { status: "", city: "" }
        }
        form={formData}
        className="md:grid grid-cols-2 gap-2"
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please, input your name!" }]}
        >
          <Input placeholder="Input your name" minLength={3} maxLength={15} />
        </Form.Item>

        <Form.Item
          name="surname"
          rules={[{ required: true, message: "Please input your surname!" }]}
        >
          <Input
            placeholder="Input your surname"
            minLength={3}
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
              pattern: /^[0-9]{9}$/,
              message: "Phone numbers must be 9 digits (numbers only)!",
            },
          ]}
        >
          <Input type="text" placeholder="Input your phone numbers" />
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
          <button className="border p-[5px_12px] rounded-md shadow-[0_0_5px_#ccc] bg-gradient-to-tr from-blue-500 text-[#fff] to-blue-700  dark:bg-gradient-to-t dark:border-[rgb(66,66,66)] dark:from-[rgb(20,20,20)] dark:to-[rgb(20,20,20)] dark:shadow-none">
            Submit
          </button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default FormCom;
