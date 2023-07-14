import NavBar from "./components/ui/NavBar";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center mt-5">
        <button
          className="border-2 p-2 border-red-500 text-red-500"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div className="px-3 text-blue-700">{count}</div>
        <button
          className="border-2 p-2 border-green-400 text-green-400"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="border-2 p-2 border-green-400 text-green-400"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          increment By 5
        </button>
      </div>
    </div>
  );
}

export default App;
