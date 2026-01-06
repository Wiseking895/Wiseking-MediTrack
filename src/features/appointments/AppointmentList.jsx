import { useSelector } from "react-redux";

const AppointmentList = () => {
  const appointments = useSelector((state) => state.appointments.list);

  return (
    <ul>
      {appointments.map((a, i) => (
        <li key={i}>
          {a.patient} — {a.date}
        </li>
      ))}
    </ul>
  );
};

export default AppointmentList;
