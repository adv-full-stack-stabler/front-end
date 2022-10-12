import { 
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';
import {
  getLocalUser,
  signInUser,
  signOutUser,
  signUpUser,
  storeLocalUser,
  verifyUser
} from '../services/auth.js';

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export default function UserProvider({ children }) {
  const localUser = getLocalUser();
  const [user, setUserState] = useState(localUser);

  const verify = async () => {
    const resp = await verifyUser();
    setUser(resp.user || null);
  };

  useEffect(() => {
    verify();
  }, []);

  const setUser = (user) => {
    storeLocalUser(user);
    setUserState(user);
  };

  const value = {
    user,
    setUser
  };

  return (<UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>);
}

export function useUser() {
  const { user } = useContext(UserContext);
  return user;
}

export function useAuth() {
  const [error, setError] = useState(null);
  const { setUser } = useContext(UserContext);

  const handleResponse = ({ user, error }) => {
    if (error) {
      //eslint-disable-next0line no-console
      console.log(error);
      setError(error.message);
    } else {
      setUser(user);
      setError(null);
    }
  };

  const signUp = async (credentials) => {
    const resp = await signUpUser(credentials);
    handleResponse(resp);
  };

  const signIn = async (credentials) => {
    const resp = await signInUser(credentials);
    handleResponse(resp);
  };

  const signOut = async () => {
    const resp = await signOutUser();
    resp.user = null;
    handleResponse(resp);
  };

  return { signUp, signIn, signOut, error };
}
