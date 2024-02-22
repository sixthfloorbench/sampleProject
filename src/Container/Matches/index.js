import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { fetchAllUsers } from "../../Utils/UserActions";

//css and styling
import { Table } from "antd";
import "./index.scss";

//custom component
import SideBar from "../../Components/SideBar";
import Profile from "../Profile";

const matchesOptions = [
  {
    key: "profileTaken",
    icon: <></>,
    label: "Profile Number Viewed",
  },
  {
    key: "profileContacted",
    icon: <></>,
    label: "Profile Contacted",
  },
  {
    key: "profileLiked",
    icon: <></>,
    label: "Profile Liked by you",
  },
  {
    key: "profileInterested",
    icon: <></>,
    label: "Profile Liked you",
  },
];

function Matches(props) {
  const dispatch = useDispatch();
  const { auth, users, data = {} } = useSelector((state) => state);
  const [matchItems, setMatchItems] = useState({});
  const [tableData, setTableData] = useState([]);
  const [columnData, setColumnData] = useState([]);
  const [title, setTitle] = useState(false);
  const [viewUser, setViewUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: true,
      width: 150,
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
      width: 150,
    },
    {
      title: "View",
      dataIndex: "view",
      key: "view",
      render: (text) => (
        <a id={text} onClick={handleProfileView}>
          View
        </a>
      ),
      width: 150,
    },
  ];

  const handleProfileView = (event) => {
    const matrimonyId = "MAT128888"; //event.target.id;
    //NOTE: Make a API call to get the user based on ID
    const response = users?.data?.response;
    setViewUser(response);
    navigate(`/profile/${matrimonyId}`, {
      state: { id: matrimonyId, data: response },
    });
  };

  useEffect(() => {
    const content = auth?.data?.response?.matchesData || {};
    setMatchItems(content);
  }, [auth]);

  const handleSideBar = (event) => {
    const title = matchesOptions.find((i) => i.key == event.key).label;
    setTitle(title);

    const i = matchItems[event.key];

    const colData = columns.filter((x) => Object.keys(i[0]).includes(x.key));

    setColumnData(colData);
    setTableData([...i]);
  };

  return (
    <>
      <div className="flex m-2">
        <SideBar
          className="matches-sidebarWrapper flex-[0_0_15%]"
          options={matchesOptions}
          onClick={handleSideBar}
        />
        <div className="flex-1 my-5">
          {title && (
            <div>
              <div className="matches-title">{title}</div>
              <Table
                bordered
                className="matches-table-wrapper"
                scroll={{
                  y: 400,
                }}
                columns={columnData}
                dataSource={tableData}
              />
              {/* <Profile currentUser={viewUser} /> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Matches;
