import { createContext, useReducer } from "react";
import { employeeReducer } from "./Reducer";
import { adminReducer } from "./Reducer";
import { useEffect } from "react";

const employeeINITIAL_STATE = {
  employee: JSON.parse(localStorage.getItem("employee")) || null,
  isFetching: false,
  error: false,
};

const adminINITIAL_STATE = {
  admin: JSON.parse(localStorage.getItem("admin")) || null,
  isFetching: false,
  error: false,
};



export const employeeContext = createContext(employeeINITIAL_STATE);
export const adminContext = createContext(adminINITIAL_STATE);

export const EmployeeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(employeeReducer, employeeINITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("employee", JSON.stringify(state.employee));
  }, [state.employee]);
  return (
    <employeeContext.Provider
      value={{
        employee: state.employee,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </employeeContext.Provider>
  );
};
export const AdminContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(adminReducer, adminINITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("admin", JSON.stringify(state.admin));
  }, [state.admin]);
  return (
    <adminContext.Provider
      value={{
        admin: state.admin,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </adminContext.Provider>
  );
};

