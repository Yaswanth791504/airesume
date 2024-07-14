import themeColors from "@/constants/colors";

export default function ThemeColors({
  setColor,
  existentColor,
}: {
  setColor: (color: string) => void;
  existentColor: string;
}) {
  return (
    <div className="flex h-full w-full justify-start items-center gap-5 flex-col py-10">
      {themeColors.map((color, index) => (
        <div
          key={index}
          className="w-7 h-7 rounded-full cursor-pointer flex items-center justify-center"
          style={{
            border: `2px solid ${color === existentColor ? color : "#fff"}`,
          }}
        >
          <span
            onClick={() => setColor(color)}
            className="w-full h-full rounded-full border-2 border-white"
            style={{ backgroundColor: color }}
          ></span>
        </div>
      ))}
    </div>
  );
}
