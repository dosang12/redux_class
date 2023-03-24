import "./App.css";
import Products from "./components/Products";
//provider 전송해주는 모듈
import { Provider } from "react-redux";
//store 임포트
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Products />
      </div>
    </Provider>
  );
}

export default App;
