export default function Languages() {
  return (
    <div className="w-full h-fit pl-3">
      <h1 className="text-white text-[13px]  border-b-2 border-white font-semibold tracking-wide">
        Languages
      </h1>
      <ul className="py-2">
        <li>
          {" "}
          <p className="text-[#d9e0e7] text-[10px] my-1 flex-1 ">English</p>
        </li>
        <li>
          {" "}
          <p className="text-[#d9e0e7] text-[10px] my-1 flex-1 ">Telugu</p>
        </li>
        <li>
          {" "}
          <p className="text-[#d9e0e7] text-[10px] my-1 flex-1 ">Hindi</p>
        </li>
      </ul>
    </div>
  );
}
