import "./User.css";
import userImg from "../../assets/images/image-jeremy.png";

function User(props) {
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
        <div className={props.mode == "dark" ? "userFooter userFooterDark" : "userFooter userFooterLight"}>
          <ul>
            <li onClick={() => props.changeTimeframe("daily")} style={props.timeframePeriod == "daily" ? (props.mode == "dark" ? { color: "white" } : { color: "black" }) : {}}>
              Daily
            </li>
            <li onClick={() => props.changeTimeframe("weekly")} style={props.timeframePeriod == "weekly" ? (props.mode == "dark" ? { color: "white" } : { color: "black" }) : {}}>
              Weekly
            </li>
            <li onClick={() => props.changeTimeframe("monthly")} style={props.timeframePeriod == "monthly" ? (props.mode == "dark" ? { color: "white" } : { color: "black" }) : {}}>
              Monthly
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default User;
