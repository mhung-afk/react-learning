import { useState } from "react";
import Count from "./components/Count";
import ScoreBoard from "./pages/ScoreBoard";
import User from "./pages/User";

function App() {
  const [user, setUser] = useState({
    name: 'Super man',
    age: 30
  })

  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2">
        {/* <Count /> */}
        <User data={user} />
      </div>
      {/* <ScoreBoard className='text-red-400' /> */}
    </>
  );
}

export default App;
