import "./App.css";
import logo from "./logo.svg";
import { Fragment } from "react";
import Member from "./components/Member card/Member";
import memberData from "./assets/MemberData";
import Home from "./components/Home/Home";

function App() {
  console.log("hellow");
  console.log("hellow");
  console.log("hellow");
  return (
    <Fragment>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}

      {memberData.map((item, index) => (
        <Member key={index} memberData={item} />
      ))}
    </Fragment>
  );
}

export default App;
