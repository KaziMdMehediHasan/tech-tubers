import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Techies from "./components/Techies/Techies";

function App() {
  return (
    <div>
      <div className="app-container">
        <div>
          <Header></Header>
        </div>
        <div className="body-container">
          <Techies></Techies>
        </div>
      </div>
    </div>
  );
}

export default App;
