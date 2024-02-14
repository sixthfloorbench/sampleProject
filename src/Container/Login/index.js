import React from "react";
import { useSelector } from 'react-redux';

import { Button, Modal, Form, Input, Checkbox } from "antd";
import "./index.scss"


function LoginPage(props) {

  const reduxState = useSelector((state) => state);

  return (
    <>
      <div class="login-container-mainwrapper" id="resLoginForm">
        <div class="container-login-wrap">
          <div class="row">
            <div className="lhs-banner-main-wrapper"></div>
            <div className="rhs-login-main-wrapper">
              <div className="login-formSection-wrap">
                <div className="login-title">Existing Member? Login</div>

                <Form
                  layout="vertical"
                  className="login-form-wrapper"
                  initialValues={{
                    layout: [],
                  }}

                >
                  <Form.Item label="Mobile No. / E-mail">
                    <Input size="large" className="login-input" placeholder="Enter your mobile or email" />
                  </Form.Item>
                  <Form.Item label="Password">
                    <Input.Password size="large" className="login-input" placeholder="Enter your password" />
                  </Form.Item>
                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                  >
                    <Checkbox>Keep me logged in</Checkbox>
                  </Form.Item>

                  <Form.Item
                  >
                    <Button className="common-btn" type="primary" htmlType="submit">
                      LOGIN
                    </Button>
                  </Form.Item>

                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage;
