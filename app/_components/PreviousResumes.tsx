import { MdDelete, MdEdit, MdViewAgenda } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateTheWholeResume } from "../_context/resumeSlice";
import { useRouter } from "next/navigation";
import { FaEye } from "react-icons/fa";

export default function PreviousResumes({
  resume,
  handleDocDelete,
}: {
  resume: any;
  handleDocDelete: any;
}) {
  const { themeColor, resumeName, resumeId } = resume;
  const dispatch = useDispatch();
  const router = useRouter();

  const handleEdit = () => {
    dispatch(updateTheWholeResume(resume));
    router.push(`/resume/build/${resumeId}`);
  };

  const handleView = () => {
    dispatch(updateTheWholeResume(resume));
    router.push(`/resume/preview/${resumeId}`);
  };

  if (!themeColor || !resumeName || !resumeId) return null;

  return (
    <div
      className="h-80 w-60 border-2 rounded-md flex flex-col p-5 justify-between text-white font-bold tracking-wide text-2xl items-start cursor-pointer transition-transform transform hover:scale-105"
      style={{ background: themeColor }}
    >
      <div className="w-full flex flex-row-reverse self-start justify-between">
        <div
          className="p-2 rounded-full hover:bg-[#ffffff2a] transition-colors duration-300"
          onClick={() => handleDocDelete(resumeId)}
        >
          <MdDelete
            style={{
              fontSize: "1.2rem",
            }}
          />
        </div>
        <div
          className="p-2 rounded-full hover:bg-[#ffffff2a] transition-colors duration-300"
          onClick={() => handleView()}
        >
          <FaEye
            style={{
              fontSize: "1.2rem",
            }}
          />
        </div>
      </div>
      <div className="w-full flex flex-row justify-between self-end">
        <h1>{resumeName}</h1>
        <div
          className="p-2 rounded-full hover:bg-[#ffffff2a] transition-colors duration-300"
          onClick={handleEdit}
        >
          <MdEdit
            style={{
              fontSize: "1.2rem",
            }}
          />
        </div>
      </div>
    </div>
  );
}
