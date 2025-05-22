import { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context value
interface User {
  name?: string;
  email?: string;
  avatar?: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  notification: string | null;
  setNotification: (notification: string | null) => void;
  showSigninModal: boolean;
  setShowSigninModal: (value: boolean) => void;
}

// Create the context with default value as undefined (for safer use)
const UserContext = createContext<UserContextType | undefined>(undefined);

// Props type for provider
interface ProviderProps {
  children: ReactNode;
}

const UserContextProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const [showSigninModal, setShowSigninModal] = useState(false);

  return (
    <UserContext.Provider
      value={{ user, setUser, notification, setNotification, showSigninModal, setShowSigninModal }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Hook with error guard
const useAuthContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useAuthContext must be used within a UserContextProvider');
  }
  return context;
};

export default useAuthContext;
export { UserContextProvider };
