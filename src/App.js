import React from "react";
import "./style.css";
import { useContext } from "react";

import PrersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import Stats from "./components/Stats";

import data from "./data/person2.json";

export default function App() {
  const [persons, setPerson] = useContext(data);

  return (
    <PersonContext.Provider value={[persons, setPerson]}>
      <div>
        <h1>Technologie Front-End- Kolokwium</h1>
        <p>Karolina Pomian</p>
        <PrersonForm />
        <PersonList />
        <Stats />
      </div>
    </PersonContext.Provider>
  );
}
