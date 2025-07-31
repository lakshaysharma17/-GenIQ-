// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return !!(token && role);
};

// Get user role
export const getUserRole = (): string | null => {
  return localStorage.getItem("role");
};

// Get user token
export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

// Clear authentication data
export const clearAuth = (): void => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("user");
};

// Check if token is expired (basic check)
export const isTokenExpired = (): boolean => {
  const token = localStorage.getItem("token");
  if (!token) return true;
  
  try {
    // Decode JWT token (without verification)
    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Date.now() / 1000;
    
    return payload.exp < currentTime;
  } catch (error) {
    return true;
  }
};

// Validate authentication status
export const validateAuth = (): boolean => {
  if (!isAuthenticated()) return false;
  if (isTokenExpired()) {
    clearAuth();
    return false;
  }
  return true;
}; 