import { useState } from "react";
import "./App.css";
import AddUserForm from "./components/AddUserForm";
import HeartsTable from "./components/HeartsTable";

function App() {
  const [players, setPlayers] = useState(["Sarah", "Bowen", "Robyn", "Ben"]);
  return (
    <div className="App">
      <h1>Hearts ScoreCard</h1>
      <AddUserForm />
      <HeartsTable players={players} />
    </div>
  );
}

export default App;
