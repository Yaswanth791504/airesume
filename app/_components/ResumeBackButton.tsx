import { useDispatch } from "react-redux";
import { decrement } from "../_context/resumeStepperSlice";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function ResumeBackButton() {
  const dispatch = useDispatch();

  const handelPrevious = () => {
    dispatch(decrement());
  };

  return (
    <button
      onClick={handelPrevious}
      className="bg-[#942d2c] text-white px-3 py-1 rounded-md disabled:opacity-50"
    >
      <IoMdArrowRoundBack />
    </button>
  );
}
