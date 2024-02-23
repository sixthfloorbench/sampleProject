import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { fetchAllUsers, searchProfilebyID } from "../../Utils/UserActions";

//css and styling
import { Table, Button, Modal, Spin } from "antd";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
      title: "Viewed Date",
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
      title: "View Profile",
      dataIndex: "view",
      key: "view",
      render: (text) => (
        <a id={text} onClick={handleProfileView}>
          View
        </a>
      ),
      width: 50,
    },
  ];

  const handleProfileView = (event) => {
    const matrimonyId = event.target.id;
    setIsLoading(true);
    const response = dispatch(searchProfilebyID({ id: matrimonyId }));
    try {
      response.then((data) => {
        setViewUser([...data.payload.data]);
        setIsModalOpen(true);
        setIsLoading(false);
      });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }

    //NOTE: Below code will take to different page
    // navigate(`/profile/${matrimonyId}`, {
    //   state: { id: matrimonyId, data: response },
    // });
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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
              <Modal
                title="View Profile"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Profile currentUser={viewUser} />
              </Modal>
            </div>
          )}
        </div>
        <Spin spinning={isLoading} fullscreen={true} />
      </div>
    </>
  );
}

export default Matches;
