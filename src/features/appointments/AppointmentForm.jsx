import { useDispatch } from "react-redux";
import { addAppointment } from "./appointmentSlice";
import Button from "../../components/common/Button";

const AppointmentForm = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() =>
        dispatch(addAppointment({ date: "2026-01-10", patient: "John Doe" }))
      }
    >
      Book Appointment
    </Button>
  );
};

export default AppointmentForm;
