import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, List } from 'antd';

const data = [
    {
        title: 'User 1',
    },
    {
        title: 'User 2',
    },
    {
        title: 'User 3',
    },
    {
        title: 'User 4',
    }]

function Home(props) {

    const reduxdata = useSelector((state) => state.auth);

    return (
        <>
            <h1 className="font-black p-10 text-5xl">This is Home Page</h1>
            {JSON.stringify(reduxdata)}
            <div className=" mx-auto w-3/5 py-5">
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                            />
                        </List.Item>
                    )}
                />

            </div>
        </>
    );
}

export default Home;
