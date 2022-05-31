import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('Must be a child of AuthContextProvider');
  return { context };
};
