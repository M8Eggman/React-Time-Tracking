import "./App.css";
import Card from "./components/card/card";
import User from "./components/user/User";
import iconWork from "./assets/images/icon-work.svg"
import data from "../data.json"

function App() {
  return (
    <>
      <section id="userInfo">
        <User />
        <div className="cards">
          {/* props = { couleur, img, title, hours, timeframe, timeframeHours } */}
          <Card couleur="Orange" img={iconWork} title="Temp" hours="Temp" timeframe="Temp" timeframeHours="Temps"/>
          <Card couleur="Orange" img={iconWork} title="Temp" hours="Temp" timeframe="Temp" timeframeHours="Temps"/>
          <Card couleur="Orange" img={iconWork} title="Temp" hours="Temp" timeframe="Temp" timeframeHours="Temps"/>
          <Card couleur="Orange" img={iconWork} title="Temp" hours="Temp" timeframe="Temp" timeframeHours="Temps"/>
          <Card couleur="Orange" img={iconWork} title="Temp" hours="Temp" timeframe="Temp" timeframeHours="Temps"/>
          <Card couleur="Orange" img={iconWork} title="Temp" hours="Temp" timeframe="Temp" timeframeHours="Temps"/>
        </div>
      </section>
    </>
  );
}

export default App;
