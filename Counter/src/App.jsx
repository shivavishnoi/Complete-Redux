import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions';
function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <h1>Counter App</h1>
      <div className="counter">
        <div className="value">{myState}</div>
        <div className="buttons">
          <button className="increment" onClick={() => dispatch(incNumber(5))}>
            +
          </button>
          <button className="decrement" onClick={() => dispatch(decNumber())}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
