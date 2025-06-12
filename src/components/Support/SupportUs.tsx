import { Link } from "react-router";

export const SupportUs = () => {
  return (
    <>
      <div className="leading-8">
        <div>
          <h1 className="mt-14 text-center text-4xl font-extrabold tracking-widest text-[#D55342] uppercase">
            Support Us
          </h1>
        </div>
        <div className="flex flex-col items-start py-20 md:flex-row">
          <div className="mb-6 flex-shrink-0 md:mb-0 md:w-1/2">
            <img
              alt="Volunteer Pic"
              className="h-auto w-full object-cover"
              src="/images/volunteerPic.webp"
            />
          </div>
          <div className="flex flex-1 items-start md:pl-16">
            <div>
              <h2 className="mb-4 text-xl font-semibold md:text-xl">
                Volunteer
              </h2>
              <p className="text-sm tracking-wider md:text-base">
                Join us in making a difference! Become a volunteer and help
                drive our initiatives forward. Whether you&apos;re a student,
                professional, or just passionate about biomedical engineering,
                your time and skills can make a real impact.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start pb-10 md:flex-row">
          <div className="mb-6 flex-shrink-0 md:mb-0 md:w-1/2">
            <img
              alt="Fundraise Pic"
              className="h-auto w-full object-cover"
              src="/images/fundRaiseImage.webp"
            />
          </div>
          <div className="flex flex-1 items-start md:pl-16">
            <div>
              <h2 className="mb-4 text-xl font-semibold md:text-xl">
                Fundraise
              </h2>
              <p className="text-sm tracking-wider md:text-base">
                Support our mission by organizing a fundraiser! Every
                contribution helps us advance biomedical engineering in Ghana
                and improve healthcare access. Rally your community and
                let&apos;s make a meaningful difference together.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-10">
          <Link
            className="rounded-full bg-[#254152] px-8 py-3 text-sm font-semibold text-white uppercase"
            to="/events"
          >
            See our events
          </Link>
        </div>
      </div>
    </>
  );
};
