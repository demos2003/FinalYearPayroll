export const employeeLoginStart = (employeeCredentials) => ({
  type: "LOGIN_START",
});

export const employeeLoginSuccess = (employee) => ({
  type: "LOGIN_SUCCESS",
  payload: employee,
});

export const employeeLoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const employeeLogout = () => ({
  type: "LOGOUT",
});



export const adminLoginStart = (adminCredentials) => ({
  type: "LOGIN_START",
});

export const adminLoginSuccess = (admin) => ({
  type: "LOGIN_SUCCESS",
  payload: admin,
});

export const adminLoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const adminLogout = () => ({
  type: "LOGOUT",
});
