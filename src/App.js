import React from "react";
import "./style.css";

import PrersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import Stats from "./components/Stats";

export default function App() {
  return (
    <div>
      <h1>Technologie Front-End- Kolokwium</h1>
      <p>Karolina Pomian</p>
      <PrersonForm />
      <PersonList />
      <Stats />
    </div>
  );
}
