export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full flex flex-row">
      <div className="w-35 bg-[#a12027] h-full">Sidebar</div>
      {children}
    </div>
  );
}
