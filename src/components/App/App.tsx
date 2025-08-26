import s from "./App.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

const App = () => {
  return (
    <div className={s.container}>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
