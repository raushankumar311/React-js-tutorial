import { useState } from "react";



function App() {

  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");

  const addValue = () => {
    if(counter < 20) {
      setCounter(counter + 1)
      setMessage("")
    }
    else {
      setMessage("You cannot increase the counter beyond 20.")
    }
  }

  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter - 1)
      setMessage("")
    }
    else {
      setMessage("You cannot decrease the counter below 0.")
    }
  }

  return (
    <div style={{backgroundColor: "lightblue", minHeight: "100vh", padding: "20px"}}>
      <h1 style={{marginTop: "40px"}}>Counter Example</h1>
      <button onClick={addValue} style={{ marginRight: "40px" }}>Add Value: {counter}</button>
      <button onClick={removeValue}>Remove Value: {counter}</button>
      {message && <p style={{ color: "darkpurple", marginTop: "10px", fontSize: "17px" }}>{message}</p>}
    </div>
  );
}

export default App;
