import { useState } from "react";
import Count from "./components/Count";
import ScoreBoard from "./pages/ScoreBoard";
import User from "./pages/User";
import UserContext from "./context/userContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Error from "./pages/Error";

function App() {
  const user = {
    name: 'Super man',
    age: 30
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <UserContext.Provider value={user}>
                <User />
              </UserContext.Provider>}>
            </Route>
            <Route path="/count" element={<Count />} />
            <Route path="/board" element={<ScoreBoard />} />
          </Route>
          <Route path="login" element={<Login />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </BrowserRouter>



      {/* <div className="absolute left-1/2 -translate-x-1/2">
        <Count />
        <UserContext.Provider value={user}>
          <User />
        </UserContext.Provider>
      </div> */}
      {/* <ScoreBoard className='text-red-400' /> */}
    </>
  );
}

export default App;
