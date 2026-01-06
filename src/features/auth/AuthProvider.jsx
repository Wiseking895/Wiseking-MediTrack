import { useSelector } from "react-redux";

const AuthProvider = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return children;
};

export default AuthProvider;
