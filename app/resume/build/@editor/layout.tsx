export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-5 px-10 h-full gap-5 flex-col flex justify-start w-full ">
      <div className="flex flex-1 border-t-4 border-[#942d2c] rounded-lg p-5 shadow-md overflow-y-scroll no-scrollbar">
        {children}
      </div>
    </div>
  );
}
