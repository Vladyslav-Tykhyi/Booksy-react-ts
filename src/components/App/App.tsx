import s from "./App.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Wellcome from "../Wellcome/Wellcome";
import Location from "../Location/Location";
import Footer from "../Footer/Footer";
import { useState } from "react";
import Modal from "../Modal/Modal";
import type { EmailData } from "../../services/types";
import Events from "../Events/Events";

const App = () => {
  const [email, setEmail] = useState<EmailData>({
    name: "",
    email: "",
    message: "",
  });
  const [isOpen, setIsModalOpen] = useState(false);
  // !footer/modal
  const onClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  // !footer

  return (
    <div>
      <div className={s.container}>
        <Header />
        <main>
          <Hero />
          <Events handleRegister={onClick} />
          <Wellcome />
          <Location />
        </main>
      </div>
      <Footer onClick={onClick} userEmail={setEmail} />
      {isOpen && (
        <Modal
          onClick={onClick}
          isOpen={isOpen}
          userEmailField={email}
          setUserEmailField={setEmail}
        />
      )}
    </div>
  );
};

export default App;
