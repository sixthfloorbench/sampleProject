import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Image } from "antd";

function Profile(props) {
  const { state, key } = useLocation();
  const [userData, setUserData] = useState(state?.data?.[0]);

  const ConstructProfile = () => {
    //TODO: Handle json response for nested objects
    const keys = Object.entries(userData).filter(
      (i) => i[0] !== "personalDetails",
    );

    const collection = keys.map((i) => {
      const title = i[0];
      const value = i[1];

      return title === "photo" ? (
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
          preview={{
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
          }}
        />
      ) : (
        <div>
          <span className="capitalize">{title}</span> : <span>{value}</span>
        </div>
      );
    });

    return (
      <div className="profile-details-wrapper leading-6">{collection}</div>
    );
  };

  return (
    <div className="profile-section-wrapper m-10" key={key}>
      <ConstructProfile />
    </div>
  );
}

export default Profile;
