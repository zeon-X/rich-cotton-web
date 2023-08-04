import React from "react";

const Clients = () => {
  let cli = [
    {
      title: "Clothing Buyer List 1",
      img: "https://i.ibb.co/QCpK0vb/Screenshot-2023-08-04-at-12-54-13-Clothing-Buyer-List-List-of-100-Garment-Buyers-in-Bangladesh.png",
      link: "",
    },
    {
      title: "Zara",
      img: "https://i.ibb.co/LYynd61/1024px-Zara-Logo-svg.png",
      link: "https://www.zara.com",
    },
    {
      title: "Asda",
      img: "https://i.ibb.co/hmT37RB/Asda-Resized-20150223115224441.jpg",
      link: "https://www.asda.com",
    },
    {
      title: "Target",
      img: "https://i.ibb.co/McGLmNQ/Target-2018-svg.png",
      link: "https://www.target.com",
    },
    {
      title: "C&A",
      img: "https://i.ibb.co/2sFbdBR/c-a-logo-188-D81-EBFB-seeklogo-com.png",
      link: "https://www.c-and-a.com",
    },
    {
      title: "Clothing Buyer List 2",
      img: "https://i.ibb.co/nLpMQQp/Screenshot-2023-08-04-at-12-54-35-Clothing-Buyer-List-List-of-100-Garment-Buyers-in-Bangladesh.png",
      link: "",
    },
    {
      title: "Clothing Buyer List 3",
      img: "https://i.ibb.co/5jBp12t/Screenshot-2023-08-04-at-12-54-26-Clothing-Buyer-List-List-of-100-Garment-Buyers-in-Bangladesh.png",
      link: "",
    },
    {
      title: "Clothing Buyer List 4",
      img: "https://i.ibb.co/f1gKmBy/Screenshot-2023-08-04-at-12-54-20-Clothing-Buyer-List-List-of-100-Garment-Buyers-in-Bangladesh.png",
      link: "",
    },
  ];

  return (
    <div>
      <section id="client" className="max-w-[1190px] w-full mx-auto py-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-medium">Our Clients</h1>
          <h2 className="text-lg mt-3">
            Celebrating Styles: Our Diverse Array of Satisfied Clients
          </h2>

          <div className="mt-14 w-full flex flex-wrap justify-center gap-10">
            {cli?.map((x, index) => {
              return (
                <div>
                  <img src={x?.img} height={140} width={140} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
