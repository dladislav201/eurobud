import { GateNav } from "@/components";
import { ReactNode } from "react";

export default function GateLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <GateNav />
      {children}
    </>
  );
}
