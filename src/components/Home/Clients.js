import ClientCarousolNew from "./ClientCarousolNew";

const Clients = () => {
  return (
    <section className="lg:px-6 md:px-4 sm:px-3">
      <section id="client" className="max-w-[1080px] w-full mx-auto pt-24 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="lg:text-4xl md:text-3xl sm:text-3xl font-medium">
            Our Clients
          </h1>
          <h2 className="text-xs text-center mt-3 text-greenxx ">
            Celebrating Styles: Our Diverse Array of Satisfied Clients
          </h2>

          <div className="mt-14 w-full flex flex-wrap justify-center gap-10">
            <ClientCarousolNew />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Clients;
