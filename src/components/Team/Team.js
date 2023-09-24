import React from "react";
import { teamData } from "../../../public/assets/data/teamData";
import TeamMember from "./TeamMember";

const Team = () => {
  let te = teamData;

  return (
    // <div className="">
    <section
      id="team"
      className="max-w-[1190px] w-full mx-auto py-14 lg:px-6 md:px-4 sm:px-3"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="lg:text-4xl md:text-3xl sm:text-3xl font-medium">
          Our Team
        </h1>
        <h2 className="text-xs text-center mt-3 text-greenxx ">
          Elevating Your Fashion Experience: Our Exceptional Team
        </h2>

        <div className="mt-14 w-full flex flex-wrap justify-center lg:gap-6 md:gap-4 sm:gap-2">
          {te?.map((x, index) => {
            return <TeamMember x={x} key={index} />;
          })}
        </div>
      </div>
    </section>
    // </div>
  );
};

export default Team;
