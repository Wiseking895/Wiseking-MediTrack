import { useSelector, useDispatch } from "react-redux";
import { selectReport } from "./reportSlice";

const ReportList = () => {
  const reports = useSelector((state) => state.reports.list);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Medical Reports</h2>

      <ul className="space-y-2">
        {reports.map((r, i) => (
          <li
            key={i}
            onClick={() => dispatch(selectReport(r))}
            className="p-4 bg-white shadow rounded cursor-pointer hover:bg-gray-50"
          >
            {r.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportList;
