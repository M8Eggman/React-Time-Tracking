import "./App.css";
import Card from "./components/card/card";
import User from "./components/user/User";
import iconWork from "./assets/images/icon-work.svg";
import iconPlay from "./assets/images/icon-play.svg";
import iconStudy from "./assets/images/icon-study.svg";
import iconExercise from "./assets/images/icon-exercise.svg";
import iconSocial from "./assets/images/icon-social.svg";
import iconSelfCare from "./assets/images/icon-self-care.svg";
import data from "./data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function App() {
  // objets regroupant tout les info pour chaque tache [couleur, icone]
  const iconsAndCouleurs = {
    Work: ["Orange", iconWork],
    Play: ["Blue", iconPlay],
    Study: ["Red", iconStudy],
    Code : ["Red", iconStudy],
    Exercise: ["Green", iconExercise],
    Social: ["Purple", iconSocial],
    "Self Care": ["Yellow", iconSelfCare],
  };

  // récupère la valeur de local storage si il existe sinon lui met dark
  const [timeframePeriod, setTimeframePeriod] = useState(() => {
    return localStorage.getItem("timeframePeriod") || "daily";
  });

  // récupère la valeur de local storage si il existe sinon lui met daily
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("mode") || "dark";
  });

  // récupère la valeur de local storage si il existe sinon lui met jeremy
  const [user, setUser] = useState(() => {
    return localStorage.getItem("user") || 0;
  });

  // sauvegarde le mode et le timeframe dans localStorage et user
  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);
  useEffect(() => {
    localStorage.setItem("timeframePeriod", timeframePeriod);
    document.body.style.backgroundColor = mode == "dark" ? "var(--Very_dark_blue)" : "aliceblue";
  }, [timeframePeriod]);
  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  // enlève la fin d'un timeframe exemple weekly => week utile pour l'affichage
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

  // change la periode de temps
  function changeTimeframe(period) {
    setTimeframePeriod(period);
  }

  // change le mode dark en light et inversement et change aussi le style du body
  function changeMode() {
    mode == "dark" ? setMode("light") : setMode("dark");
    document.body.style.backgroundColor = mode == "dark" ? "aliceblue" : "var(--Very_dark_blue)";
  }

  // change l'utilisateur
  function changeUser() {
    user == 0 ? setUser(1) : setUser(0);
  }

  return (
    <>
      <button onClick={changeMode} style={mode == "dark" ? { color: "aliceblue" } : { color: "var(--Very_dark_blue)" }} id="changeMode">
        {mode == "dark" ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
      </button>
      <button onClick={changeUser}>{mode == "dark" ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}</button>
      <section id="userInfo">
        <User changeTimeframe={changeTimeframe} mode={mode} timeframePeriod={timeframePeriod} username={data[user].username} img={data[user].userImage} />
        <div className="cards">
          {/* props = { couleur, img, title, hours, timeframe, timeframeHours } */}
          {data[user].stats.map((item) => (
            <Card
              key={item.title}
              couleur={iconsAndCouleurs[item.title][0]}
              img={iconsAndCouleurs[item.title][1]}
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
