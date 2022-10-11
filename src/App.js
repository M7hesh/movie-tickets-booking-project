import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PaymentSuccessfulPage from "./Components/PaymentSuccessfulPage";
import TicketPayment from "./Components/TicketPayment";
import BookSeats from "./Components/BookSeats";
import NoPage from "./Components/NoPage";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<HomePage />} />
            <Route path="/booking" element={<BookSeats />} />
            <Route path="/payment" element={<TicketPayment />} />
            <Route
              path="/paymentSuccessful"
              element={<PaymentSuccessfulPage />}
            />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
