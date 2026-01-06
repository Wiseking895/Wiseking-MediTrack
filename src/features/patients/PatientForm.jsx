import { useDispatch } from "react-redux";
import { addPatient } from "./patientSlice";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const PatientForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPatient({ name: "New Patient" }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input label="Patient Name" required />
      <Button>Add Patient</Button>
    </form>
  );
};

export default PatientForm;
