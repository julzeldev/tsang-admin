import { createContext, useState, ReactNode } from 'react';

// Define the shape of the authentication context
export interface AuthContextType {
  auth: boolean;
  login: (token: string) => void;
  logout: () => void;
}

// Create a context with a default value of null (will be initialized later)
export const AuthContext = createContext<AuthContextType | null>(null);

// Define the props type for the AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

// Helper function to check if the user is authenticated
const isAuthenticated = (): boolean => {
  return localStorage.getItem('authToken') !== null;
};

// AuthProvider component to wrap around the app and provide authentication state
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<boolean>(isAuthenticated());

  const login = (token: string) => {
    localStorage.setItem('authToken', token);
    setAuth(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
