import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  Button,
  message,
  Form,
  Space,
  Input,
  Upload,
  Menu,
  Spin,
  Select,
  DatePicker,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./index.scss";

const dynamicForm = [
  {
    type: "input",
    label: "Name",
    name: "name",
    component: <Input placeholder="Enter your name" />,
  },
  {
    type: "input",
    label: "Mobile",
    name: "mobile",
    component: <Input placeholder="Enter your Mobile" />,
  },
  {
    type: "select",
    label: "Select your Gender",
    name: "gender",
    component: (
      <Select
        placeholder="Select your Gender"
        options={[
          {
            value: "Male",
            label: "Male",
          },
          {
            value: "Female",
            label: "Female",
          },
        ]}
      />
    ),
  },
  {
    type: "input",
    label: "Date of Birth",
    name: "dob",
    component: <></>,
  },
  {
    type: "select",
    label: "Select your Marital Status",
    name: "marriageStatus",
    component: (
      <Select
        placeholder="Select your Marital Status"
        options={[
          {
            value: "unmarried",
            label: "Unmarried",
          },
          {
            value: "married",
            label: "Married Already",
          },
        ]}
      />
    ),
  },

  {
    type: "input",
    label: "Rasi",
    name: "rasi",
    component: <Input placeholder="Enter your rasi" />,
  },
  {
    type: "input",
    label: "Nakshatra",
    name: "nakshtra",
    component: <Input placeholder="Enter your Nakshatra" />,
  },
  {
    type: "input",
    label: "Caste",
    name: "caste",
    component: <Input placeholder="Enter your Caste" />,
  },

  {
    type: "input",
    label: "SubCaste",
    name: "subcaste",
    component: <Input placeholder="Enter your SubCaste" />,
  },

  {
    type: "photo",
    label: "Upload Your Photo",
    name: "photo",
    component: (
      <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture"
      >
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    ),
  },
  {
    type: "photo",
    label: "Upload Your Horoscope",
    name: "horoscope",
    component: (
      <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture"
      >
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    ),
  },
];

function Registration(props) {
  const { state = {}, key } = useLocation();

  const data = useSelector((state) => state.auth);

  const [messageApi, contextHolder] = message.useMessage();

  const [currentAge, setCurrentAge] = useState(false);

  const registrationFormRef = useRef(null);

  const { name = "" } = state?.data;

  const handleForm = () => {
    const data = registrationFormRef.current.getFieldValue();
    console.log(data, "formsubmitdata");
    if (data) {
      messageApi.open({
        type: "success",
        duration: 10,
        top: 500,
        content: "The Registration Form has been saved Successfully",
      });
    }
  };

  function calculateAge(birthDate) {
    debugger;
    const birthDateObj = new Date(birthDate);
    const today = new Date(); // today's date (without time)
    today.setHours(0, 0, 0, 0);
    const timeDiff = today.getTime() - birthDateObj.getTime();
    const ageInYears = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
    return ageInYears;
  }

  const handleDob = (e) => {
    const currentAge = calculateAge(e?.$d);
    registrationFormRef.current.setFieldsValue({
      age: currentAge,
      dob: e?.$d,
    });
    setCurrentAge(currentAge >= 0 ? currentAge : false);
  };

  const CreateRegistrationForm = () => {
    const formList = dynamicForm.map((item, i) => {
      const { type, label, name, component = <></> } = item;

      return (
        <Form.Item label={label} name={name}>
          {name === "dob" ? (
            <>
              <DatePicker onChange={handleDob} needConfirm />
              {currentAge && (
                <span className="mx-2"> Current Age: {currentAge}</span>
              )}
            </>
          ) : (
            component
          )}
        </Form.Item>
      );
    });

    return (
      <div className="registration-form w-4/12 h-96 overflow-auto">
        <Form
          layout="vertical"
          ref={registrationFormRef}
          initialValues={{ ...state.data }}
        >
          {formList}
          <Space className="flex justify-end">
            <Button htmlType="button">Reset</Button>
            <Button type="primary" onClick={handleForm} htmlType="submit">
              Submit
            </Button>
          </Space>
        </Form>
      </div>
    );
  };

  return (
    <>
      {/* <h1 className="font-black p-10 text-5xl">This is Registration Page</h1> */}
      <div className="m-10">
        <h4 className="text-2xl">Hi {name},</h4>
        <CreateRegistrationForm />
        {contextHolder}
      </div>
    </>
  );
}

export default Registration;
