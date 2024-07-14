import { Outfit } from "next/font/google";

const roboto = Outfit({ weight: "700", subsets: ["latin"] });

export default function Info({ color }: { color: string }) {
  return (
    <div className="h-fit w-full" style={{ color }}>
      <h1 className={`font-bold text-xl tracking-wider ${roboto.className}`}>
        Yaswanth Mallisetti
      </h1>
    </div>
  );
}
