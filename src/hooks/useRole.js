import useAuth from "./useAuth";

const useRole = (role) => {
  const { user } = useAuth();
  return user?.role === role;
};

export default useRole;
