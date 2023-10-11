import Clients from "@/components/Home/Clients";
import Contact from "@/components/Home/Contact";
import HomeCarousol from "@/components/Home/HomeCarousol";
import Product from "@/components/Home/Product";
import Services from "@/components/Home/Services";
import Team from "@/components/Team/Team";

export default function Home() {
  return (
    <main className="">
      <HomeCarousol />

      <Product />
      <Services />
      <Clients />
      <Team />
      <Contact />
    </main>
  );
}
