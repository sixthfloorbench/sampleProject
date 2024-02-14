import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

//css
import "./index.scss"

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen((flag) => !flag);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const LoginForm = () => {
        return (
            <Modal
                title="Register"
                visible={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form
                    layout="vertical"
                    initialValues={{
                        layout: [],
                    }}

                >
                    <Form.Item label="Mobile No. / E-mail">
                        <Input placeholder="Enter your mobile or email" />
                    </Form.Item>
                    <Form.Item label="Password">
                        <Input.Password placeholder="Enter your password" />
                    </Form.Item>
                </Form>
            </Modal>
        );
    };

    return (
        <>
            <div className="common-header-main-wrapper">
                <div className="common-header-wrapper">
                    <div className="rhs-wrapper">
                        <div className="right-hand-login">
                            <div className="already-mem-wrapper">
                                <div>Haven't Registered ?</div>
                            </div>
                            <div className="login-wrapper">
                                <Button onClick={showModal} className="btn-login">
                                    REGISTER FREE
                                </Button>
                                <LoginForm />
                            </div>
                            <div className="help-wrapper">
                                <QuestionCircleOutlined className="question-ico" />
                                <span>Help</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
