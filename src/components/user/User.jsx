import "./User.css";
import userImg from "../../assets/images/image-jeremy.png";
import { useState } from "react";

function User(props) {
  const [daily, setDaily] = useState(true);
  const [weekly, setWeekly] = useState(false);
  const [monthly, setMonthly] = useState(false);
  // selon où l'on click met le bon booléen en true et les autre en false
  function handleClick(timeframe) {
    if (timeframe == "daily") {
      setDaily(true);
      setWeekly(false);
      setMonthly(false);
      props.changeTimeframe(timeframe);
    } else if (timeframe == "weekly") {
      setDaily(false);
      setWeekly(true);
      setMonthly(false);
      props.changeTimeframe(timeframe);
    } else {
      setDaily(false);
      setWeekly(false);
      setMonthly(true);
      props.changeTimeframe(timeframe);
    }
  }
  return (
    <>
      <div className={props.mode == "dark" ? "user darkMode" : "user lightMode"}>
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
            <li onClick={() => handleClick("daily")} style={daily ? (props.mode == "dark" ? { color: "white" } : { color: "black" }) : {}}>
              Daily
            </li>
            <li onClick={() => handleClick("weekly")} style={weekly ? (props.mode == "dark" ? { color: "white" } : { color: "black" }) : {}}>
              Weekly
            </li>
            <li onClick={() => handleClick("monthly")} style={monthly ? (props.mode == "dark" ? { color: "white" } : { color: "black" }) : {}}>
              Monthly
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default User;
