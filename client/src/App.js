import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CovidTestsPage from "./components/CovidTestsPage";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import PageNotFound from "./components/PageNotFound";
import { Routes, Route } from "react-router-dom";
import TrackAppointmentsPage from "./components/TrackAppointmentsPage";
import DoctorsPage from "./components/DoctorsPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/covidtests" element={<CovidTestsPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/trackappointments" element={<TrackAppointmentsPage />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
