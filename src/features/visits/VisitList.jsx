import { useSelector } from "react-redux";

const VisitList = () => {
  const visits = useSelector((state) => state.visits.list);

  return (
    <ul>
      {visits.map((v, i) => (
        <li key={i}>Visit on {v.date.toString()}</li>
      ))}
    </ul>
  );
};

export default VisitList;
