/** biome-ignore-all lint/nursery/noSecrets: intentional */

import { ExecutivesCard } from "@components/Executives/ExecutivesCard";

const teamMembers = [
  {
    id: 1,
    name: "Lindsay Walton",
    role: "CEO",
    imageUrl:
      "https://unsplash.com/photos/a-woman-standing-in-a-greenhouse-with-her-arms-crossed-mNtpaxo-U5Q",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 2,
    name: "Courtney Henry",
    role: "COO",
    imageUrl:
      "https://www.istockphoto.com/photo/man-adult-caucasian-with-beard-and-eyeglasses-work-on-laptop-at-home-gm2025682392-561704301?searchscope=image%2Cfilm",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 3,
    name: "Tom Cook",
    role: "Director of Product",
    imageUrl:
      "https://media.istockphoto.com/id/2000672702/photo/happy-smiling-mature-indian-or-latin-business-man-ceo-trader-using-computer-typing-working-in.jpg?s=612x612&w=0&k=20&c=cQ7M4YxnYYDTKzYMS6pKjmZAH-9LpXjcMmJJyhT6LE0=",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 4,
    name: "Whitney Francis",
    role: "Copywriter",
    imageUrl:
      "https://www.istockphoto.com/photo/man-with-eyeglasses-stand-at-home-use-mobile-phone-sms-texting-gm2066301960-564276173?searchscope=image%2Cfilm",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 5,
    name: "Leonard Krasner",
    role: "Senior Engineer",
    imageUrl:
      "https://media.istockphoto.com/id/2000672702/photo/happy-smiling-mature-indian-or-latin-business-man-ceo-trader-using-computer-typing-working-in.jpg?s=612x612&w=0&k=20&c=cQ7M4YxnYYDTKzYMS6pKjmZAH-9LpXjcMmJJyhT6LE0=",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 6,
    name: "Floyd Miles",
    role: "Principal Designer",
    imageUrl:
      "https://www.istockphoto.com/photo/close-up-portrait-of-confident-businessman-standing-in-office-gm1919265357-555252563?searchscope=image%2Cfilm",
    linkedin: "#",
    twitter: "#",
  },
];

export const Team = () => {
  return (
    <section className="md:p-16 lg:p-20">
      <div className="flex flex-col gap-8 bg-white md:p-10">
        <h2 className="mt-14 mb-4 text-center text-4xl font-bold text-[#C25144]">
          Meet The Organization&apos;s Executives
        </h2>
        <h2 className="mb-4 text-3xl font-bold">Leadership</h2>
        <div className="flex flex-wrap justify-center gap-12 p-4 md:p-0">
          {teamMembers.map((member) => (
            <div className="w-full lg:w-[25rem]" key={member.id}>
              <ExecutivesCard key={member.id} member={member} />
            </div>
          ))}
        </div>
        <h2 className="mb-4 text-3xl font-bold">Board of Trustees</h2>
        <div className="flex flex-wrap justify-center gap-12 p-4 md:p-0">
          {teamMembers.map((member) => (
            <div className="w-full lg:w-[25rem]" key={member.id}>
              <ExecutivesCard key={member.id} member={member} />
            </div>
          ))}
        </div>
        <div className="flex w-5/6 flex-col items-center justify-between md:flex-row">
          <h2 className="text-3xl font-bold">Other Members</h2>
          {/* <p>some stuff</p> */}
        </div>
        <div className="flex flex-wrap justify-center gap-12 p-4 md:p-0">
          {teamMembers.map((member) => (
            <div className="w-full lg:w-[25rem]" key={member.id}>
              <ExecutivesCard key={member.id} member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
