import "./User.css";
import userImg from "../../assets/images/image-jeremy.png";
import { useState } from "react";

function User() {
  const [daily, setDaily] = useState(true);
  const [weekly, setWeekly] = useState(false);
  const [monthly, setMonthly] = useState(false);

  function handleClick(e) {
    if (e.target.textContent == "Daily") {
      setDaily(true);
      setWeekly(false);
      setMonthly(false);
    } else if (e.target.textContent == "Weekly") {
      setDaily(false);
      setWeekly(true);
      setMonthly(false);
    } else {
      setDaily(false);
      setWeekly(false);
      setMonthly(true);
    }
  }
  return (
    <>
      <div className="user">
        <div className="userHeader">
          <div className="userHeaderImg">
            <img src={userImg} alt="" />
          </div>
          <div className="userHeaderName">
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
        </div>
        <div className="userFooter">
          <ul>
            <li onClick={(e) => handleClick(e)} style={daily ? { color: "white" } : {}}>
              Daily
            </li>
            <li onClick={(e) => handleClick(e)} style={weekly ? { color: "white" } : {}}>
              Weekly
            </li>
            <li onClick={(e) => handleClick(e)} style={monthly ? { color: "white" } : {}}>
              Monthly
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default User;
