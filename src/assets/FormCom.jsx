import React from "react";
import { Button, Form, Input } from "antd";
import SelectCom from "./SelectCom";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const FormCom = () => {
  return (
    <Form
      name="basic"
      layout="vertical"
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item name="name">
        <Input required placeholder="Input your name" />
      </Form.Item>

      <Form.Item name="       ">
        <Input size="middle" required placeholder="Input your surname" />
      </Form.Item>
      <Form.Item name="email">
        <Input
          size="middle"
          required
          type="email"
          placeholder="Input your email"
        />
      </Form.Item>
      <Form.Item name="Phone numbers">
        <Input
          size="middle"
          required
          type="number"
          placeholder="Input your phone numbers"
        />
      </Form.Item>
      <Form.Item name="image">
        <Input size="middle" required placeholder="Input your image" />
      </Form.Item>
      <div className="flex justify-between">
        <Form.Item label="City" name="city">
          <SelectCom
            arr={[
              { value: "", label: "All cities" },
              { value: "dushanbe", label: "Dushanbe" },
              { value: "bokhtar", label: "Bokhtar" },
              { value: "Kulob", label: "Kulob" },
              { value: "Hisor", label: "Hisor" },
              { value: "Khujand", label: "Khujand" },
            ]}
          />
        </Form.Item>
        <Form.Item label="Status" name="status">
          <SelectCom
            arr={[
              { value: "", label: "All status" },
              { value: "active", label: "Active" },
              { value: "inactive", label: "Inactive" },
            ]}
          />
        </Form.Item>
      </div>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormCom;
