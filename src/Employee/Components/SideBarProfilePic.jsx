import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";

const SideBarProfilePic = ({ employee }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      const res = await axios.get(`${config.baseURL}/employee/${employee._id}`);
      setUserInfo(res.data);
      if (res.data.profilePic) {
        setImage(res.data.profilePic.fileUrl);
      }
    };
    getUserDetails();
  }, [employee._id]);


  return (
    <div className="profile-picture">
      {image ? (
        <div className="profile-picture-container">
          <img src={image} alt="" width={90} height={90} className="profilePic2" />
        </div>
      ) : (
        <FaRegUserCircle className="icon9" fontSize={80} />
      )}
    </div>
  );
};

export default SideBarProfilePic;