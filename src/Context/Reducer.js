export const employeeReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        employee: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        employee: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        employee: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        employee: null,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

export const adminReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        admin: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        admin: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        admin: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        admin: null,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};
