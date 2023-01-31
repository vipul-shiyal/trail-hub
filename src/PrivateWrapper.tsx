import { Navigate } from 'react-router-dom';

type Props = {
  children: JSX.Element;
};

export const PrivateWrapper = ({ children }: Props) => {
  let isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/not-found" />;
};
