import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, double, login } from "./actions";

function App() {

  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Let's go</h1>
      <h3>Counter : {counter}</h3>
      <button onClick={()=>(dispatch(increment(10)))}>+</button>
      <button onClick={()=>(dispatch(decrement()))}>-</button>
      <button onClick={()=>(dispatch(double()))}>*</button>
      <button onClick={()=>(dispatch(login()))}>Login</button>
      {isLogin ? <h3>You are loged in!</h3> : <h3>You have to login.</h3>}
    </div>
  );
}

export default App;
