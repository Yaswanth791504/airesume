import React from "react";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-gray-200 z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#942d2c]"></div>
    </div>
  );
}
