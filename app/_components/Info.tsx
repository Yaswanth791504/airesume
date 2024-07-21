import { Outfit } from "next/font/google";
import Experience from "./Experience";
import Achievements from "./Achievements";
import { useSelector } from "react-redux";

const roboto = Outfit({ weight: "700", subsets: ["latin"] });

export default function Info({ color }: { color: string }) {
  const { name, role, about } = useSelector((state: any) => state.resume);

  return (
    <div className="h-fit w-full flex flex-col gap-3" style={{ color }}>
      <div>
        <h1 className={`text-2xl tracking-wider  ${roboto.className}`}>
          {name}
        </h1>
        <h3 className="tracking-widest">{role}</h3>
      </div>
      <div>
        <p className="text-[9px] text-black">{about}</p>
      </div>
      <Experience color={color} />
      <Achievements color={color} />
    </div>
  );
}
