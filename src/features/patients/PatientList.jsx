import { useSelector } from "react-redux";

const PatientList = () => {
  const patients = useSelector((state) => state.patients.list);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Patients</h2>
      <ul className="space-y-2">
        {patients.map((p, i) => (
          <li key={i} className="p-4 bg-white shadow rounded">
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
