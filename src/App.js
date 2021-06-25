import Father1 from "./Father1";
import Father2 from "./Father2";
import Son1 from "./Son1";
import Son2 from "./Son2";
import Class from "./Class";

function App() {
  return (
    <Class>
      <Father1>
        <Son1></Son1>
      </Father1>
      <Father2>
        <Son2></Son2>
      </Father2>
    </Class>
  );
}

export default App;
