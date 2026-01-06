import { useDispatch } from "react-redux";
import { loginSuccess } from "./authSlice";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      loginSuccess({
        user: { name: "Demo User", role: "doctor" },
        token: "demo-token",
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
      <Input label="Email" type="email" required />
      <Input label="Password" type="password" required />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
