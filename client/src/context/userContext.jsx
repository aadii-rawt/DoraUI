import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state
    const [notification, setNotification] = useState(null);
    const [showSigninModal,setShowSigninModal] = useState(true)

    return (
        <UserContext.Provider value={{ user, setUser, notification, setNotification,showSigninModal,setShowSigninModal}}>
            {children}
        </UserContext.Provider>
    );
};

const useAuthContext = () => {
    return useContext(UserContext);
};

export default useAuthContext;
export { UserContextProvider };