export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full flex flex-row scrollbar-hide overflow-y-auto">
      {children}
    </div>
  );
}
