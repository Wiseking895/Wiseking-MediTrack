import { useDispatch } from "react-redux";
import { addVisit } from "./visitSlice";
import Button from "../../components/common/Button";

const VisitForm = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(addVisit({ date: new Date() }))}>
      Add Visit
    </Button>
  );
};

export default VisitForm;
