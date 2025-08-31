import s from "./App.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Wellcome from "../Wellcome/Wellcome";
import Location from "../Location/Location";
import Footer from "../Footer/Footer";
import { useState } from "react";
import Modal from "../Modal/Modal";

const App = () => {
  // const [email, setEmail] = useState({ name: "", email: "", message: "" });
  const [isOpen, setIsModalOpen] = useState(false);
  // !footer/modal
  const onClick = () => setIsModalOpen((prev) => !prev);

  // !footer

  return (
    <div>
      <div className={s.container}>
        <Header />
        <main>
          <Hero />
          <Wellcome />
          <Location />
        </main>
      </div>
      <Footer onClick={onClick} />
      {isOpen && <Modal onClick={onClick} isOpen={isOpen} />}
    </div>
  );
};

export default App;
