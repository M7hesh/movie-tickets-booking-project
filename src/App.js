import React from "react";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const CONTACT_DATA = [
  {
    imgPath: "./pushpa.jpg",
    contactName: "Pushpa",
    phone: "(212) 555-2345",
    mail: "fluff@me.com",
  },
  {
    imgPath: "./brahmastra.jpg",
    contactName: "Brahmastra",
    phone: "(0800) CAT KING",
    mail: "pumpkin@scrimba.com",
  },
  {
    imgPath: "./bahubali.jpg",
    contactName: "Bahubali",
    phone: "(0800) CAT KING",
    mail: "pumpkin@scrimba.com",
  },
  {
    imgPath: "./RRR.jpg",
    contactName: "RRR",
    phone: "(0800) CAT KING",
    mail: "pumpkin@scrimba.com",
  },
  {
    imgPath: "./kgf2.jpg",
    contactName: "KGF 2",
    phone: "(212) 555-4567",
    mail: "thecat@hotmail.com",
  },
];

function App() {
  return (
    <>
      <Navbar />
      <div className="contacts">
        {CONTACT_DATA.map((contact) => {
          const { imgPath, contactName, phone, mail } = contact;
          return (
            <Contact
              imgPath={imgPath}
              contactName={contactName}
              phone={phone}
              mail={mail}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
