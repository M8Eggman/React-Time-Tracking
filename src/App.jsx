import "./App.css";
import Card from "./components/card/card";
import User from "./components/user/User";

function App() {
  return (
    <>
      <section className="userInfo">
        <User />
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
}

export default App;
