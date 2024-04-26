import { useState } from "react";
import Count from "./components/Count";
import ScoreBoard from "./pages/ScoreBoard";
import User from "./pages/User";
import UserContext from "./context/userContext";

function App() {
  // const user = {
  //   name: 'Super man',
  //   age: 30
  // }

  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2">
        {/* <Count /> */}
        {/* <UserContext.Provider value={user}>
          <User />
        </UserContext.Provider> */}
      </div>
      <ScoreBoard className='text-red-400' />
    </>
  );
}

export default App;
