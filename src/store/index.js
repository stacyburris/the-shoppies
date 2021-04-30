// import { createStore, combineReducers, applyMiddleware } from 'redux';

// import { composeWithDevTools } from 'redux-devtools-extension';

// import thunk from 'redux-thunk';

// import movieStore from './reducer';


// let reducers = combineReducers ({ movieStore }); 

// const store = () => {
//   return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
// }

// export default store();

//////////////////////////////////

import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types'; //With PropTypes.element you can specify that only a single child can be passed to a component as children.
import Reducer from './reducer';

const initialState = {
    movies: [], 
    nominations: [],
    error: null,
};



const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};

Store.propTypes = {
  
  children: PropTypes.node.isRequired,
};

export const GlobalContext = createContext(initialState);
export default Store;