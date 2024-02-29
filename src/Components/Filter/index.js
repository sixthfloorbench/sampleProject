import React, { useState, useEffect } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Divider, Radio, Select, Tag } from "antd";
import "./index.scss";
import { Space } from "antd";

const educationData = [
  { value: "All - அனைத்தும்", label: "All - அனைத்தும்" },
  {
    value: "8th, 10th, 12th, ITI, Diploma",
    label: "8th, 10th, 12th, ITI, Diploma",
  },
  { value: "Under Graduate", label: "Under Graduate" },
  { value: "Post Graduate", label: "Post Graduate" },
  { value: "Engineering", label: "Engineering" },
  { value: "Advocate", label: "Advocate" },
  { value: "ICWAI/CA/CS/CFA", label: "ICWAI/CA/CS/CFA" },
  { value: "IAS/IPS/IRS/IES/IFS", label: "IAS/IPS/IRS/IES/IFS" },
  { value: "Doctor", label: "Doctor" },
  { value: "Ph.d", label: "Ph.d" },
];

const ageData = [
  { value: "18 வயது வரை", label: "18 வயது வரை" },
  { value: "19 வயது வரை", label: "19 வயது வரை" },
  { value: "20 வயது வரை", label: "20 வயது வரை" },
  { value: "21 வயது வரை", label: "21 வயது வரை" },
  { value: "22 வயது வரை", label: "22 வயது வரை" },
  { value: "23 வயது வரை", label: "23 வயது வரை" },
  { value: "24 வயது வரை", label: "24 வயது வரை" },
  { value: "25 வயது வரை", label: "25 வயது வரை" },
  { value: "26 வயது வரை", label: "26 வயது வரை" },
  { value: "27 வயது வரை", label: "27 வயது வரை" },
  { value: "28 வயது வரை", label: "28 வயது வரை" },
  { value: "29 வயது வரை", label: "29 வயது வரை" },
  { value: "30 வயது வரை", label: "30 வயது வரை" },
  { value: "31 வயது வரை", label: "31 வயது வரை" },
  { value: "32 வயது வரை", label: "32 வயது வரை" },
  { value: "33 வயது வரை", label: "33 வயது வரை" },
  { value: "34 வயது வரை", label: "34 வயது வரை" },
  { value: "35 வயது வரை", label: "35 வயது வரை" },
  { value: "36 வயது வரை", label: "36 வயது வரை" },
  { value: "37 வயது வரை", label: "37 வயது வரை" },
  { value: "38 வயது வரை", label: "38 வயது வரை" },
  { value: "39 வயது வரை", label: "39 வயது வரை" },
  { value: "40 வயது வரை", label: "40 வயது வரை" },
  { value: "41 வயது வரை", label: "41 வயது வரை" },
  { value: "42 வயது வரை", label: "42 வயது வரை" },
  { value: "43 வயது வரை", label: "43 வயது வரை" },
  { value: "44 வயது வரை", label: "44 வயது வரை" },
  { value: "45 வயது வரை", label: "45 வயது வரை" },
  { value: "46 வயது வரை", label: "46 வயது வரை" },
  { value: "47 வயது வரை", label: "47 வயது வரை" },
  { value: "48 வயது வரை", label: "48 வயது வரை" },
  { value: "49 வயது வரை", label: "49 வயது வரை" },
  { value: "50 வயது வரை", label: "50 வயது வரை" },
  { value: "51 வயது வரை", label: "51 வயது வரை" },
  { value: "52 வயது வரை", label: "52 வயது வரை" },
  { value: "53 வயது வரை", label: "53 வயது வரை" },
  { value: "54 வயது வரை", label: "54 வயது வரை" },
  { value: "55 வயது வரை", label: "55 வயது வரை" },
  { value: "56 வயது வரை", label: "56 வயது வரை" },
  { value: "57 வயது வரை", label: "57 வயது வரை" },
  { value: "58 வயது வரை", label: "58 வயது வரை" },
  { value: "59 வயது வரை", label: "59 வயது வரை" },
  { value: "60 வயது வரை", label: "60 வயது வரை" },
];

function Filter(props) {
  const [form] = Form.useForm();

  const handleChange = () => {};

  const onPhotoPrefChange = () => {};

  return (
    <div>
      <div className="filter-main-wrapper">
        <h2>Filter Profile</h2>
        <Form form={form} layout="vertical" initialValues={{}}>
          <Space>
            <Form.Item label="Age from">
              <Select
                defaultValue="18 வயது வரை"
                onChange={handleChange}
                options={ageData}
              />
            </Form.Item>
            <Form.Item label="Age to">
              <Select
                defaultValue="30 வயது வரை"
                onChange={handleChange}
                options={ageData}
              />
            </Form.Item>
          </Space>
          <div>
            <Form.Item label="கல்வி">
              <Select
                defaultValue="All - அனைத்தும்"
                onChange={handleChange}
                options={educationData}
              />
            </Form.Item>
          </div>
          <Radio.Group onChange={onPhotoPrefChange} value={1}>
            <Radio value={1}>All Profile</Radio>
            <Radio value={2}>With Photo Profile</Radio>
          </Radio.Group>

          <Divider className="divider-lines">அல்லது</Divider>

          <Form.Item label="தாங்கள் தேட விரும்பும் வரன்களின் பதிவு எண்கள்:">
            <Input placeholder="பதிவு எண்கள்" />
          </Form.Item>

          <Form.Item className="text-center">
            <Button className="search-button" size="large" type="primary">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Filter;
