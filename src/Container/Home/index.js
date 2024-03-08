import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers } from "../../Utils/UserActions";
import { Avatar, List } from "antd";
import Filter from "../../Components/Filter";
import { useCollection } from "../../Firebase/Hooks/useCollection";
import { collection, getDocs } from "firebase/firestore";
import { dbConfig } from "../../Firebase/config"; 



const listData = [
  {
    title: "User 1",
  },
  {
    title: "User 2",
  },
  {
    title: "User 3",
  },
  {
    title: "User 4",
  },
];

function Home(props) {

  useEffect(()=>{
    const dataUsers = useCollection();
    console.log("dataUsers", dataUsers)
  },[])

  const dispatch = useDispatch();

  const { auth, users } = useSelector((state) => state);

  const { name = "as Guest !!" } = auth?.data?.data[0];

   //const usersData = useCollection();

  //   useEffect(() => {
  //     dispatch(fetchAllUsers());
  //   }, [dispatch]);

  return (
    <>
      <h1 className="font-black p-10 text-5xl">Welcome {name}</h1>
      <pre style={{ textWrap: "wrap" }}>{JSON.stringify(auth)}</pre>
      -----------------------------------
      <div className="flex p-10">
        <div className=" mx-auto w-3/5 py-5">
          <List
            itemLayout="horizontal"
            dataSource={listData}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                    />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                />
              </List.Item>
            )}
          />
          
        </div>
        <Filter />
      </div>
      <p> "fdfdf"
          {
            //JSON.stringify(dataUsers)
          }
          </p>
    </>
  );
}

export default Home;
