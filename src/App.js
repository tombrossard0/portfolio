import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import {useState} from "react"


function App() {
  const [activePage, setActivePage] = useState("Home")

  return (
    <div className="App">
      <Header active={activePage}/>
    </div>
  );
}

export default App;