import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearState, clearSuccess } from "../../Utils/Authentication";

//css and styling
import { Button, Modal, Form, Input, Menu, Spin } from "antd";
import "./index.scss";

import {
  QuestionCircleOutlined,
  CrownFilled,
  UserOutlined,
  BellFilled,
  SearchOutlined,
  TeamOutlined,
  LogoutOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const items = [
  {
    label: "Home",
    key: "/home",
    icon: <HomeOutlined className="head-icon" />,
  },
  {
    label: "Matches",
    key: "/matches",
    icon: <TeamOutlined className="head-icon" />,
  },
  {
    label: "Search",
    key: "/search",
    icon: <SearchOutlined className="head-icon" />,
  },
  {
    label: "Notification",
    key: "/notification",
    icon: <BellFilled className="head-icon" />,
  },
  {
    label: "My Profile",
    key: "/myprofile",
    icon: <UserOutlined className="head-icon" />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Logout",
            key: "logout",
            icon: <LogoutOutlined />,
          },
        ],
      },
    ],
  },
];

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentLocation = window.location.pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSuccess, isError, error, isLoading, data } = useSelector(
    (state) => state.auth,
  );

  // const { isSuccess, isError, error, isLoading, data } = useSelector(
  //     (state) => state.product
  // );

  const showModal = () => {
    if (currentLocation === "/registration") {
      navigate("/");
    } else {
      setIsModalOpen((flag) => !flag);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/registration");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    if (e.key === "logout") {
      console.log("click logout", e);
      dispatch(clearState());
      dispatch(clearSuccess());
      navigate("/");
    } else {
      navigate(e.key);
      setCurrent(e.key);
    }
  };

  const LoginForm = () => {
    return (
      <Modal
        title="Create a Matrimony Profile"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          layout="vertical"
          initialValues={{
            layout: [],
          }}
        >
          <Form.Item label="Enter Name">
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item label="Enter Mobile">
            <Input placeholder="Enter your mobile" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  return (
    <>
      <div className="common-header-main-wrapper">
        <div className="common-header-wrapper">
          <div className="lhs-wrapper">
            <div className="demo-logo">
              <CrownFilled />
              <span>Dummy Title</span>
            </div>
          </div>
          <div className="rhs-wrapper">
            {isSuccess ? (
              <div className="post-login-wrapper">
                <Menu
                  onClick={onClick}
                  selectedKeys={[current]}
                  mode="horizontal"
                  items={items}
                />
              </div>
            ) : (
              <div className="right-hand-login">
                {/* TODO: Make this modular */}
                <div className="already-mem-wrapper">
                  <div>
                    {currentLocation === "/registration"
                      ? "Already Registered ?"
                      : "Haven't Registered ?"}
                  </div>
                </div>
                <div className="login-wrapper">
                  <Button onClick={showModal} className="btn-login">
                    {currentLocation === "/registration"
                      ? "LOGIN"
                      : "REGISTER FREE"}
                  </Button>
                </div>
                <LoginForm />
                <div className="help-wrapper">
                  <QuestionCircleOutlined className="question-ico" />
                  <span>Help</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <Spin spinning={isLoading} fullscreen={true} />
      </div>
    </>
  );
};

export default Header;
