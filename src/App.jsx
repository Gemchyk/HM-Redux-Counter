import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import {incValue, decValue} from './store/counterSlice'

function App() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleIncCounterValue = () => {

    dispatch(incValue(count));
  }
  const handleDecCounterValue = () => {

    dispatch(decValue(count));
  }

  return (
    <>
      <h3>Value: {count}</h3>
      <div>
        <button onClick={handleDecCounterValue}>-</button>
        <button onClick={handleIncCounterValue}>+</button>
      </div>
    </>
  )
}

export default App
