import { GateNav } from "@/components";

export default function GateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GateNav />
      {children}
    </>
  );
}
