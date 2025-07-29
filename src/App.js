import "./App.css";
import CountryDetails from "./components/CountryDetails";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return <div className="App">
    <Routes>
      <Route path="/" element= {<HomePage/>} />
      <Route path="/:alpha3Code" element={<CountryDetails /> } />
    </Routes>
  </div>;
}

export default App;