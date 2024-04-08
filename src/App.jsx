import Count from "./components/Count";
import ScoreBoard from "./pages/ScoreBoard";

function App() {
  return (
    <>
      {/* <div className="absolute left-1/2 -translate-x-1/2">
        <Count />
      </div> */}
      <ScoreBoard className='text-red-400' />
    </>
  );
}

export default App;
