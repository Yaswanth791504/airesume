"use client";

import { useSelector } from "react-redux";

export default function Contact() {
  const { phone, email, address } = useSelector((state: any) => state.resume);

  if (phone === "" && email === "" && address === "") return null;

  return (
    <div className="w-full h-fit pl-3">
      <h1 className="text-white  text-[13px] border-b-2 border-white font-semibold tracking-wide">
        Contact
      </h1>
      <div className="py-2">
        <div className="py-1">
          <h1 className="text-white text-[10px] tracking-wide">Phone</h1>
          <p className="text-[#d9e0e7] text-[9px] ">{phone}</p>
        </div>
        <div className="py-1">
          <h1 className="text-white text-[10px] tracking-wide">Email</h1>
          <p className="text-[#d9e0e7] text-[9px] ">{email}</p>
        </div>
        <div className="py-1">
          <h1 className="text-white text-[10px] tracking-wide">Address</h1>
          <p className="text-[#d9e0e7] text-[9px]">{address}</p>
        </div>
      </div>
    </div>
  );
}
