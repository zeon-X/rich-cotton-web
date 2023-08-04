import Clients from "@/components/Home/Clients";
import Product from "@/components/Home/Product";
import Services from "@/components/Home/Services";
import Team from "@/components/Home/Team";

export default function Home() {
  return (
    <main className="relative">
      <Product />
      <Clients />
      <Services />
      <Team />
    </main>
  );
}
