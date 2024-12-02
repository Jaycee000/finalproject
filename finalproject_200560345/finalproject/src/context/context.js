import { createContext, useCallback, useReducer } from "react";

const type = {
  NAV: "NAV",
  COLOR: "COLOR",
  TRANSTION: "TRANSTION",
};

const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case type.NAV:
      return {
        ...state,
        nav: action.payload,
      };
    case type.COLOR:
      return {
        ...state,
        color: action.payload,
      };
    case type.TRANSTION:
      return {
        ...state,
        transition: action.payload,
      };

    default:
      return state;
  }
};
const State = (props) => {
  const initialState = {
    nav: "home",
    color: "deeporange",
    transition: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const sectionToggle = useCallback((value) => {
    dispatch({ type: type.TRANSTION, payload: true });
    setTimeout(() => {
      dispatch({
        type: type.NAV,
        payload: value,
      });
    }, 500);
    setTimeout(() => {
      dispatch({ type: type.TRANSTION, payload: false });
    }, 2000);
  }, []);

  const setActiveStyleSheet = useCallback((value) => {
    dispatch({
      type: type.COLOR,
      payload: value,
    });
  }, []);

  const { nav, color, transition } = state;

  return (
    <Context.Provider
      value={{ nav, sectionToggle, color, setActiveStyleSheet, transition }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;

export { Context };
