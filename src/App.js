import { useState } from "react";
import "./App.css";
import data from "./countries.json";

function App() {
  const [countries, setCountrie] = useState(data);
  return <div className="App"></div>;
}

export default App;