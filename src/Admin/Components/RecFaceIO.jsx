/* eslint-disable no-undef */
import React, { useEffect } from "react";

function RecFace() {
  let faceioInstance = null;

  useEffect(() => {
    const faceIoScript = document.createElement("script");
    faceIoScript.src = "//cdn.faceio.net/fio.js";
    faceIoScript.async = true;
    faceIoScript.onload = () => faceIoScriptLoaded();
    document.body.appendChild(faceIoScript);

    return () => {
      document.body.removeChild(faceIoScript);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const faceIoScriptLoaded = () => {
    console.log(faceIO);
    if (faceIO && !faceioInstance) {
      faceioInstance = new faceIO("fioade7a");
    }
  };

  // New face character register to system

  // Authentication a a face has into system
  const faceSignIn = async () => {
    try {
      console.log(faceioInstance);
      const userData = await faceioInstance.authenticate({
        locale: "auto",
      });
      console.log(userData);

      console.log("Unique Facial ID: ", userData.facialId);
      console.log("PayLoad: ", userData.payload);
    } catch (errorCode) {
      console.log(errorCode);
      handleError(errorCode);
    }
  };

  return (
    <div className="face-authentication-by-thanhphongdev flex fdc jcfc aic">
      <button className="action face-sign-in" onClick={faceSignIn}>
        Face Sign In
      </button>
    </div>
  );
}

export default RecFace;
