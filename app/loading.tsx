import React from "react";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-gray-200 z-50">
      <div className="w-20 h-20 border-4 border-t-4 border-[#a12027] rounded-full animate-spin"></div>
    </div>
  );
}
