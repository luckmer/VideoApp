import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import Index from "../reducers/index";

const Save = (state) => {
  try {
    const data = JSON.stringify(state);
    localStorage.setItem("CONTEXT", data);
  } catch (err) {
    throw err;
  }
};

const Load = () => {
  try {
    const data = localStorage.getItem("CONTEXT");
    if (data === null) return;
    return JSON.parse(data);
  } catch (err) {
    throw err;
  }
};

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
const Store = createStore(Index, Load(), middleware);

Store.subscribe(() => Save(Store.getState()));

export default Store;
