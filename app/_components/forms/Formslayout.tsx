export default function FormsLayout({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="text-[#942d2c] text-4xl font-bold">{name}</h1>
      {children}
    </>
  );
}
