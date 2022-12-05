import hedgehog from "./hedgehog.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hedgehog} className="App-logo" alt="hedgehog" />
        <p>Hello world! I am a small, cute hedgehog 🦔</p>
      </header>
    </div>
  );
}

export default App;
