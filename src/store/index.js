import { createStore } from 'redux';
import { city } from './../reducers/city';

const initialState = {
  city: 'Buenos Aires, ar'
};

console.log("createStore");
export const store = createStore(city, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  //El parámetro window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // ayuda a vincular con el plugin que tiene chrome