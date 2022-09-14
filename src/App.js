import './App.css';
import Users from "./components/userComponents/Users/Users";
import './components/userComponents/userCss/user.css'

function App() {
  return (
    <div className="wrap">
      <h2 className={'title'}>The Rick and Morty API</h2>
      <Users/>

    </div>
  );
}

export default App;
