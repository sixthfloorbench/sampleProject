import React from "react";
import "./index.scss"
import { Breadcrumb, Layout, Menu, theme } from "antd";

import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;


const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);
        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,
            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    }
);

const item3 = [
    {
        key: '1',
        icon: <UserOutlined />,
        label: 'nav 1',
    },
    {
        key: '2',
        icon: <VideoCameraOutlined />,
        label: 'nav 2',
    },
    {
        key: '3',
        icon: <UploadOutlined />,
        label: 'nav 3',
    }]


function SideBar(props) {
    const { className = '' } = props
    return <>
        <Menu
            mode="inline"
            // theme="dark"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            className={`sidebar-wrapper ${className} min-h-96`}
            items={item3}
        />
    </>;
}

export default SideBar;
