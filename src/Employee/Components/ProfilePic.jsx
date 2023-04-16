import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";

const ProfilePic = ({ employee }) => {
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
          <img src={image} alt="" width={150} height={150} className="profilePic" />
        </div>
      ) : (
        <FaRegUserCircle className="icon9" fontSize={120} />
      )}
    </div>
  );
};

export default ProfilePic;

// import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FaUserCircle } from "react-icons/fa";
// import config from "../../../config";

// export const ProfilePicture = ({ admin }) => {
//     const [userData, setUserData] = useState(null);
//     const [image, setImage] = useState(null);

//     useEffect(() => {
//         const getUserDetails = async () => {
//             const res = await axios.get(`${config.baseURL}/admin/${admin._id}`);
//             setUserData(res.data);
//             if (res.data.profilePic) {
//                 setImage(res.data.profilePic.fileUrl);
//             }
//         };
//         getUserDetails();
//     }, [admin._id]);

//     return (
//         <div className="profile-picture">
//             {image ? (
//                 <div className="profile-picture-container">
//                     <img src={image} alt="" />
//                 </div>
//             ) : (
//                 <FaUserCircle className="icon9" />
//             )}
//         </div>
//     );
// };

// export default ProfilePicture;
