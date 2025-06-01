// Returns true if 'user' key exists in localStorage, else false
export const isAuthenticated = (): boolean => {
  return Boolean(localStorage.getItem("user"));
};

// Optional: Set user in localStorage (simulate login)
export const login = (userData: string): void => {
  localStorage.setItem("user", userData);
};

// Optional: Remove user from localStorage (logout)
export const logout = (): void => {
  localStorage.removeItem("user");
};
