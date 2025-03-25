import { readFileSync } from "fs";
import Image from "next/image";
import { FC } from "react";

export const MemberList: FC = async () => {
  async function create() {
    return JSON.parse(readFileSync("public/members.json", "utf-8")) as {
      name: string;
      role: string;
      img: string;
    }[];
  }

  const members = await create();

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <div className="text-4xl font-semibold mb-4">Meet the Team!</div>
        <div className="text-lg text-center text-muted-foreground">
          Our team is made up of talented individuals who are passionate about
          their work! Without them the organization of the event would not be
          possible!
        </div>
        <div className="grid grid-cols-4 gap-1 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {members.map((member, i) => (
            <div key={i} className="bg-white rounded-lg p-4">
              <Image
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h3 className="text-xl font-bold text-center mt-4">
                {member.name}
              </h3>
              <p className="text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-xl mt-4">Contact</div>
      <div className="text-md mt-4">
        If you have any questions, please send us an email at{" "}
        <a
          href="mailto:programming_committee@svcover.nl"
          className="text-pink-500 underline"
        >
          programming_committee@svcover.nl
        </a>
        ! If you&rsquo;re looking for more teammates, or would like to get an
        answer quicker you can also join the{" "}
        <a
          href="https://discord.com/invite/JfzxyBHPsH"
          className="text-pink-500 underline"
        >
          FCG Discord
        </a>
        ! There&rsquo;s always passionate people looking to help you out!
      </div>
    </>
  );
};
