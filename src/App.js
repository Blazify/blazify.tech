import "./App.css";

import { Fragment } from "react";
import Member from "./components/Member card/Member";
import memberData from "./assets/MemberData";

function App() {
  return (
    <Fragment>
      {memberData.map((item, index) => (
        <Member key={index} memberData={item} />
      ))}
    </Fragment>
  );
}

export default App;
