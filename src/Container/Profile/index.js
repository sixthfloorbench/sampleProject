import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Image } from "antd";

function Profile({ currentUser = [] }) {
  const { state = {}, key } = useLocation();
  const [userData, setUserData] = useState(
    (state && state.data) || currentUser,
  );

  useEffect(() => {
    if (currentUser.length) {
      setUserData(currentUser);
    }
  }, [currentUser]);

  const ProfileDetails = ({ data }) => {
    const profileItems = Object.entries(data).map(([key, value]) => {
      const items = (
        <>
          <span className="capitalize">{key}</span> : <span>{value}</span>
        </>
      );
      return (
        <div key={key}>
          {key === "photo" || key === "birthChart" ? (
            <ProfileImage src={value} />
          ) : (
            items
          )}
        </div>
      );
    });

    return (
      <div className="profile-details-wrapper leading-6">{profileItems}</div>
    );
  };

  const ProfileImage = ({ src }) => (
    <Image width={200} src={src} preview={{ src }} />
  );

  const CreateProfile = () => {
    const personalDetails = userData[0]?.personalDetails;
    const userDetails = userData.map(({ personalDetails, ...rest }) => rest);

    return (
      <div>
        <ProfileDetails data={userDetails[0]} />
        {personalDetails && (
          <div>
            <div>Personal Details</div>
            <ProfileDetails data={personalDetails} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="profile-section-wrapper m-10" key={key}>
      <CreateProfile />
    </div>
  );
}

export default Profile;
