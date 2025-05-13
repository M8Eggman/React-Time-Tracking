import "./User.css";
import userImg from "../../assets/images/image-jeremy.png";

function User() {
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
            <li>Daily</li>
            <li>Weekly</li>
            <li>Monthly</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default User;
