import React from "react";
import Svg from "../../ICONS/Svg";
import Svg2 from "../../ICONS/Svg2";
import Popup1 from "./Popup1";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Popup2 from "./Popup2";
import axios from "axios";
import config from "../../config";

function PositionBtn({ positionItem }) {
  const [buttonPopup3, setBP3] = useState(false);
  const [buttonPopup4, setBP4] = useState(false);
  const [name, setName] = useState("");
  const [pay, setPay] = useState("");
  const [position, setPosition] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);
  const [error, setError] = useState("")

  useEffect(() => {
    const getPosition = async () => {
      const res = await axios.get(`${config.baseURL}/position/${positionItem}`);
      setPosition(res.data);
      setName(res.data.name);
      setPay(res.data.pay);
    };
    getPosition();
  }, [positionItem]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${config.baseURL}/position/${positionItem}`);
      window.location.replace("/Dashboard");
    } catch (err) {
     
    }
  };

  const handleUpdate = async () => {
    try {
      axios.put(`${config.baseURL}/position/${position._id}`, {
        name,
        pay,
      });
      window.location.reload();
    } catch (err) {
      setError("Please Dont Leave any Field Empty")
    }
  };

  return (
    <div>
      <div className="btn-flex">
        <a onClick={() => {
          setBP3(true);
          setUpdateMode(true);
          
          }} className="edit-btn">
          <Svg2></Svg2>
        </a>
        <Popup1 trigger={buttonPopup3} setTrigger={setBP3} >
          <form >
            <h2>Edit Position</h2>
            <div class="form-row">
              <div class="form-group form-edit">
                <label for="inputEmail4">Position Title</label>
                {updateMode ? (
                  <input
                    type="text"
                    class="form-control input-edit"
                    id="inputAddress"
                    placeholder="Position Title"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  <input
                    type="text"
                    class="form-control input-edit"
                    id="inputAddress"
                    placeholder="Position Title"
                  />
                )}
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress2">Rate Per Hour</label>
              {updateMode ? (
                <input
                  type="number"
                  class="form-control"
                  id="inputAddress2"
                  value={pay}
                  onChange={(e) => setPay(e.target.value)}
                />
              ) : (
                <input type="number" class="form-control" id="inputAddress2" />
              )}
            </div>
            <button
              type="submit"
              class="btn btn-primary save-btn"
              id="btn-space"
              onClick={handleUpdate}
            >
              Save
            </button>
            {error && (
              <div>
                <p>{error}</p>
              </div>
            )}
          </form>
        </Popup1>
        <a onClick={() => setBP4(true)} className="del-btn">
          <Svg></Svg>
        </a>
        <Popup2 trigger={buttonPopup4} setTrigger={setBP4}>
          <h3>Are you sure you want to delete</h3>
          <button className="del-confirm" onClick={handleDelete}>
            Yes..
          </button>
        </Popup2>
      </div>
    </div>
  );
}

export default PositionBtn;
