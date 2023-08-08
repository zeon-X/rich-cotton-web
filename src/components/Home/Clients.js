import ClientsCarousol from "./ClientsCarousol";

const Clients = () => {
  return (
    <div className="lg:px-6 md:px-4 sm:px-3">
      <section id="client" className="max-w-[1190px] w-full mx-auto py-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-medium">Our Clients</h1>
          <h2 className="text-xs mt-3 text-green">
            Celebrating Styles: Our Diverse Array of Satisfied Clients
          </h2>

          <div className="mt-14 w-full flex flex-wrap justify-center gap-10">
            <ClientsCarousol />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
