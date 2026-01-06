import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const RegisterForm = () => {
  return (
    <form className="max-w-md mx-auto space-y-6">
      <Input label="Full Name" required />
      <Input label="Email" type="email" required />
      <Input label="Password" type="password" required />
      <Button>Create Account</Button>
    </form>
  );
};

export default RegisterForm;
