import { useSelector } from "react-redux";

const ReportDetail = () => {
  const report = useSelector((state) => state.reports.selected);

  if (!report) return <p>Select a report to view details.</p>;

  return (
    <div className="p-6 bg-white shadow rounded">
      <h3 className="text-lg font-semibold">{report.title}</h3>
      <p className="mt-3 text-gray-600">{report.content}</p>
    </div>
  );
};

export default ReportDetail;
