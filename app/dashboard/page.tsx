import NewResume from "../_components/NewResume";
import PreviousResumes from "../_components/PreviousResumes";

export default function Page() {
  return (
    <div className="p-20 h-full flex flex-1 gap-5">
      <NewResume />
      <PreviousResumes />
    </div>
  );
}
