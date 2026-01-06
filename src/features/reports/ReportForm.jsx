import { useDispatch } from "react-redux";
import { addReport } from "./reportSlice";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const ReportForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addReport({
        title: "General Medical Report",
        content: "Patient diagnosis and treatment notes.",
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input label="Report Title" required />
      <Input label="Report Content" required />
      <Button>Create Report</Button>
    </form>
  );
};

export default ReportForm;
