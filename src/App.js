import './App.css';

import './components/css/spaceX.css'

import Flights from "./components/flights/Flights";

function App() {
  return (
    <div className="App">
        <h2 className={'title'}>SpaceX</h2>
      <Flights/>

    </div>
  );
}

export default App;
