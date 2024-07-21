import FormsLayout from "./forms/Formslayout";
import { useDispatch, useSelector } from "react-redux";
import { updateResumeIntoFirebase } from "../firebase/firebaseCalls";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useParams, useRouter } from "next/navigation";
import { reset } from "../_context/resumeStepperSlice";
import { useForm } from "react-hook-form";
import { updateResumeName } from "../_context/resumeSlice";
import { useState, useEffect } from "react";

export default function AllSet() {
  const [user, loadingAuth] = useAuthState(auth);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const resume = useSelector((state: any) => state.resume);

  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      resumeTitle: resume.resumeName,
    },
  });
  const { resumeId } = useParams();

  useEffect(() => {
    if (!loadingAuth && !user) {
      router.replace("/login"); // Redirect to login if not authenticated
    }
  }, [user, loadingAuth, router]);

  const onsubmit = async (data: any) => {
    if (!user) return;

    setLoading(true);
    try {
      console.log(data);
      dispatch(updateResumeName(data.resumeTitle));

      const updatedResume = {
        ...resume,
        resumeName: data.resumeTitle,
      };

      await updateResumeIntoFirebase(
        user.uid,
        resumeId as string,
        updatedResume
      );
      dispatch(reset());
      router.replace("/dashboard");
    } catch (error) {
      console.error("Failed to update resume:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormsLayout name="All Set">
      <div className="w-full h-96 flex flex-col gap-3 justify-center items-center">
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="w-[70%] p-10 flex flex-col gap-5"
        >
          <div>
            <label htmlFor="resumeTitle">Resume Title</label>
            <input
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#942d2c] focus:border-[#942d2c] sm:text-sm"
              type="text"
              {...register("resumeTitle", {
                required: "Title is required",
              })}
              name="resumeTitle"
              id="resumeTitle"
            />
          </div>
          <button
            type="submit"
            disabled={!isValid || loading}
            className="bg-[#942d2c] text-white px-4 py-2 rounded-md disabled:opacity-50 self-start"
          >
            Finish
          </button>
        </form>
      </div>
    </FormsLayout>
  );
}
