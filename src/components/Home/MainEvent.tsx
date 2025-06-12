import { Link } from "react-router";

export const MainEvent = () => {
  return (
    <div className="bg-[#EAEAE8] px-2 pt-2 pb-10">
      <div>
        <img alt="Conference flyer" src="/images/gsbe_conference.webp" />
      </div>
      <div>
        <div className="flex flex-col justify-between gap-10 py-8 text-justify text-sm leading-relaxed font-light text-[#2F2F2E] md:flex-row">
          <span className="w-full">
            The Ghana Society of Biomedical engineers is organizing our 4th
            National biomedical engineering conference
            <br /> Ghana Society of Biomedical Engineers (GSBE) is a
            professional body in Ghana focused on contributing to the Healthcare
            Technology (medical equipment) Management, prosthetics and orthotics
            rehabilitation, research and development, design & fabrication of
            medical devices, healthcare policies and standards formulation in
            Ghana. With this in mind, we combine design and problem-solving
            skills of Engineering with medicine, biological science and
            technology to improve healthcare diagnosis and treatment.
          </span>
          <span className="w-full">
            As part of our constitutional mandate, it is said to have its annual
            conference every ensuing year to keep account of it&apos;s year
            under review. This year&apos;s conference marks the 4th annual
            general conference which seeks to elect it&apos;s new leaders to
            spear head the affairs of the society.
            <br /> The Date for this year&apos;s conference is slated to take
            place from 30th of October to the 1st of November 2024, we therefore
            entreat all members to take note and plans to be part of this very
            memorable occasion. The theme for this year&apos;s conference is:
            <span className="pl-2 text-base font-medium italic">
              &quot;Quality of Healthcare Delivery in Ghana, the Role of
              Biomedical Engineering.&quot;
            </span>
            <br />
            Come and let&apos;s make this general conference a joyous one..
          </span>
        </div>
      </div>
      <Link to="/events/2nd-african-regional-biomedical-engineering-conference-ghana">
        <div className="mx-auto w-40 bg-[#282626] px-3 py-3 text-center text-sm font-normal text-white hover:bg-white hover:text-[#254152] hover:outline">
          Register Now
        </div>
      </Link>
    </div>
  );
};
