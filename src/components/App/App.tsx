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
import Feedback from "../Feedback/Feedback";
import Books from "../Books/Books";

import { Toaster } from "react-hot-toast";

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
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          duration: 3500,
          style: {
            background: "#e15d05",
            padding: "8px",
            zIndex: 9999,
          },
          removeDelay: 1000,
        }}
      />

      <div className={s.container}>
        <Header />
        <main>
          <Hero />
          <Books />
          <Feedback />
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
