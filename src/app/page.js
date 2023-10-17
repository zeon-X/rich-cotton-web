import Clients from "@/components/Home/Clients";
import Contact from "@/components/Home/Contact";
import HomeCarousolNew from "@/components/Home/HomeCarousolNew";
import Product from "@/components/Home/Product";
import Services from "@/components/Home/Services";
import Team from "@/components/Team/Team";

export default function Home() {
  return (
    <main className="m-0 p-0 overflow-hidden">
      <HomeCarousolNew />
      <Product />
      <Services />
      <Clients />
      <Team />
      <Contact />
    </main>
  );
}
