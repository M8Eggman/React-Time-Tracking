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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  // liste dans l'ordre pour les cards
  const couleurs = ["Orange", "Blue", "Red", "Green", "Purple", "Yellow"];
  const icons = [iconWork, iconPlay, iconStudy, iconExercise, iconSocial, iconSelfCare];
  // state qui gère la periode de temps
  const [timeframePeriod, setTimeframePeriod] = useState("daily");
  // state qui gère le mode
  const [mode, setMode] = useState("dark");
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
  // change la period de temps
  function changeTimeframe(period) {
    setTimeframePeriod(period);
  }
  // change le mode darke en light et inversement
  function changeMode() {
    if (mode == "dark") {
      setMode("light");
      document.body.style.backgroundColor = "aliceblue";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "var(--Very_dark_blue)";
    }
  }
  return (
    <>
      <button onClick={changeMode} style={mode == "dark" ? { color: "aliceblue" } : { color: "var(--Very_dark_blue)" }} id="changeMode">
        {mode == "dark" ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
      </button>
      <section id="userInfo">
        <User changeTimeframe={changeTimeframe} mode={mode} />
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
              mode={mode}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
