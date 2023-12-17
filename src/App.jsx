import "./App.css";
import DigitalClock from "./components/Clock";
import { TodoWrapper } from "./components/TodoWrapper";

function App() {
  return (
    <div className="App">
      <DigitalClock />
      <TodoWrapper />
    </div>
  );
}

export default App;
