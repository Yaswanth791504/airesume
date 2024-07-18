import { IoMdArrowRoundForward } from "react-icons/io";
import { increment } from "../_context/resumeStepperSlice";
import { useDispatch } from "react-redux";

export default function ResumeNextButton({ isValid }: { isValid: boolean }) {
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(increment());
  };
  return (
    <button
      onClick={handleNext}
      type="submit"
      className="bg-[#942d2c] flex items-center gap-2 text-white px-4  py-2 rounded-md disabled:opacity-50"
      disabled={!isValid}
    >
      Next
      <IoMdArrowRoundForward />
    </button>
  );
}
