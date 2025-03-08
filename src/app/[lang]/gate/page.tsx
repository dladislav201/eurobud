import { GateProducts, Installation, Ribbon } from "@/components";
import { gates } from "@/data";

export default function Gate() {
  return (
    <main className="main gate all">
      <Ribbon saleProduct={"воріт"} saleProcent={20} />

      <section className="gates-container">
        {gates.map((gate) => (
          <GateProducts key={gate.id} gate={gate} />
        ))}
      </section>

      <Installation />
    </main>
  );
}
