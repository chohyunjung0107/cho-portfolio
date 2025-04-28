export default function Contents({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="p-[1%] w-[1024px] h-[85vh] ">{children}</div>;
}
