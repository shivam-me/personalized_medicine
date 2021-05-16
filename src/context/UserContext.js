import React, { useReducer } from "react";
import actionType from "./actionType";
export const UserContext = React.createContext({});
let initialState = {
  authenticated: false,
  loading: true,
  user: {},
};
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <UserContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
const rootReducer = (state, action) => {
  switch (action.type) {
    case actionType.setAuthentication:
      return { ...state, authenticated: action.payload, loading: false };
    case actionType.setUnAuthentication:
      return { ...state, authenticated: action.payload, loading: false };
    case actionType.setUser:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
