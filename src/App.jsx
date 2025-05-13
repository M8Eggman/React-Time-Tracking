import "./App.css";
import Card from "./components/card/card";
import User from "./components/user/User";
import iconWork from "./assets/images/icon-work.svg";
import iconPlay from "./assets/images/icon-play.svg";
import iconStudy from "./assets/images/icon-study.svg";
import iconExercise from "./assets/images/icon-exercise.svg";
import iconSocial from "./assets/images/icon-social.svg";
import iconSelfCare from "./assets/images/icon-self-care.svg";
import data from "../data.json";
import { useState } from "react";

function App() {
  const couleurs = ["Orange", "Blue", "Red", "Green", "Purple", "Yellow"];
  const icons = [iconWork, iconPlay, iconStudy, iconExercise, iconSocial, iconSelfCare];
  const [timeframePeriod, setTimeframePeriod] = useState("daily");
  // enlève la fin d'un timeframe exemple weekly => week
  function transformer(timeframe) {
    switch (timeframe) {
      case "daily":
        return "day";
      case "weekly":
        return "week";
      case "monthly":
        return "month";
    }
  }
  function changeTimeframe(period) {
    setTimeframePeriod(period)
  }
  return (
    <>
      <section id="userInfo">
        <User changeTimeframe={changeTimeframe} />
        <div className="cards">
          {/* props = { couleur, img, title, hours, timeframe, timeframeHours } */}
          {data.map((item, index) => (
            <Card
              key={item.title}
              couleur={couleurs[index]}
              img={icons[index]}
              title={item.title}
              hours={item.timeframes[timeframePeriod].current}
              timeframe={transformer(timeframePeriod)}
              timeframeHours={item.timeframes[timeframePeriod].previous}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
