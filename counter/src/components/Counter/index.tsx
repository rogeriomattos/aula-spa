import { useState } from "react";
import "./styles.css";

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const add = (value:number) => setCount(state => state + value);

  return (
    <div className="wrapper">
      <div className="content">
        <div className="count">{count}</div>
        <div className="actions">
          <button onClick={()=>add(-1)}>-</button>
          <button onClick={()=>add(1)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CounterComponent;