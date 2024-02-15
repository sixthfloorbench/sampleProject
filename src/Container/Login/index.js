import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, clearState } from "../../Utils/Authentication";

//css and styling
import { Button, Form, Input, Checkbox } from "antd";
import "./index.scss";

function LoginPage(props) {
  const data = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { isSuccess } = data;

  const [successResponse, setSuccessResponse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isSuccess, "isSuccess");
    if (isSuccess) {
      navigate("/home");
    }
    setSuccessResponse(isSuccess);
  }, [isSuccess]);

  const handleLoginSubmit = (values) => {
    console.log("Success:", values);
    dispatch(loginUser(values));
  };

  return (
    <>
      <div className="login-container-mainwrapper" id="resLoginForm">
        <div className="container-login-wrap">
          <div className="row">
            {JSON.stringify(data)}
            <div className="lhs-banner-main-wrapper"></div>
            <div className="rhs-login-main-wrapper">
              <div className="login-formSection-wrap">
                <div className="login-title">Existing Member? Login</div>

                <Form
                  layout="vertical"
                  className="login-form-wrapper"
                  initialValues={{
                    remember: true
                  }}
                  onFinish={handleLoginSubmit}
                >
                  <Form.Item
                    label="Mobile No"
                    name="mobile"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Mobile No!"
                      }
                    ]}
                  >
                    <Input
                      size="large"
                      className="login-input"
                      placeholder="Enter your mobile"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!"
                      }
                    ]}
                  >
                    <Input.Password
                      size="large"
                      className="login-input"
                      placeholder="Enter your password"
                    />
                  </Form.Item>
                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Keep me logged in</Checkbox>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      className="common-btn"
                      type="primary"
                      htmlType="submit"
                    >
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
  );
}

export default LoginPage;
