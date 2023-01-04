import "./App.css";

import { Fragment } from "react";
// import Member from "./components/Member card/Member";
// import memberData from "./assets/MemberData";
import Home from "./components/Home/Home";

function App() {
  return (
    <Fragment>
      <Home />

      {/* {memberData.map((item, index) => (
        <Member key={index} memberData={item} />
      ))} */}
    </Fragment>
  );
}

export default App;
