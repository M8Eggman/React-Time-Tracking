import "./Card.css";
import troisPoint from "../../assets/images/icon-ellipsis.svg";

// props = { couleur, img, title, hours, timeframe, timeframeHours }
function Card(props) {
  return (
    <>
      <div className={"card card" + props.couleur}>
        <div className="cardHeader">
          <img src={props.img} alt="" />
        </div>
        <div className="cardBody">
          <div className="cardBodyTitle">
            <p>{props.title}</p>
            <div className="cardBodyTitleImg">
              <img src={troisPoint} alt="" />
            </div>
          </div>
          <div className="cardBodyHours">
            <p>{props.hours}hrs</p>
            <p>
              Last {props.timeframe} - {props.timeframeHours}hrs
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
