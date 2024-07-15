import { Outfit } from "next/font/google";
import Experience from "./Experience";
import Achievements from "./Achievements";

const roboto = Outfit({ weight: "700", subsets: ["latin"] });

export default function Info({ color }: { color: string }) {
  return (
    <div className="h-fit w-full flex flex-col gap-3" style={{ color }}>
      <div>
        <h1
          className={`text-xl tracking-wider lg:text-3xl ${roboto.className}`}
        >
          Yaswanth Mallisetti
        </h1>
        <h3 className="tracking-widest">Full Stack Developer</h3>
      </div>
      <div>
        <p className="text-[9px] md:text-[10px] lg:text-[12px] text-black">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          repudiandae nesciunt quas amet fugiat quae velit, corporis est alias
          nam ducimus quo? Sint ducimus, corrupti tempora reiciendis suscipit
          esse sed.
        </p>
      </div>
      <Experience color={color} />
      <Achievements color={color} />
    </div>
  );
}
