import s from "./App.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Wellcome from "../Wellcome/Wellcome";
import Location from "../Location/Location";

const App = () => {
  return (
    <div className={s.container}>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Wellcome />
        <Location />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
