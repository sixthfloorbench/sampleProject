import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

//css and styling
import { Table } from "antd";
import "./index.scss";

//custom component
import SideBar from "../../Components/SideBar";

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
];

function Matches(props) {
  const { data } = useSelector((state) => state.auth);

  const [matchItems, setMatchItems] = useState({});
  const [tableData, setTableData] = useState([]);
  const [columnData, setColumnData] = useState([]);
  const [title, setTitle] = useState(false);

  useEffect(() => {
    const content = data["matchesData"] || {};
    setMatchItems(content);
  }, [data]);

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
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Matches;
