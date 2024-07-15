export default function Languages() {
  return (
    <div className="w-full h-fit pl-3">
      <h1 className="text-white text-[16px] md:text-[17px] lg:text-[18px]  border-b-2 border-white font-semibold tracking-wide">
        Languages
      </h1>
      <ul className="py-2">
        <li>
          {" "}
          <p className="text-[#d9e0e7] text-[10px] my-1 flex-1 md:text-[12px] lg:text-[14px]">
            English
          </p>
        </li>
        <li>
          {" "}
          <p className="text-[#d9e0e7] text-[10px] my-1 flex-1 md:text-[12px] lg:text-[14px]">
            Telugu
          </p>
        </li>
        <li>
          {" "}
          <p className="text-[#d9e0e7] text-[10px] my-1 flex-1 md:text-[12px] lg:text-[14px]">
            Hindi
          </p>
        </li>
      </ul>
    </div>
  );
}
