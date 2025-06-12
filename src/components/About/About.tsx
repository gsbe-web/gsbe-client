import { CoreValues } from "@components/About";
import { Link } from "react-router";

export const AboutUs = () => {
  return (
    <div className="p-0 md:p-12 lg:p-20">
      <main className="min-h-screen bg-white text-[#455D6B] md:p-10">
        <div className="relative h-[500px] w-full">
          <img
            alt="aboutGSBE"
            className="absolute top-0 left-0 h-full w-full object-cover"
            src=" /images/officialgsbe_cover_about.jpeg"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black opacity-30" />
          <h1 className="absolute top-1/2 z-1 w-full text-center text-4xl font-extrabold text-[#d54c3d]">
            ABOUT US
          </h1>
        </div>
        <div className="mt-7 flex w-full flex-col gap-8 text-center align-middle leading-8 lg:flex-row">
          <div className="flex flex-col justify-between gap-4 bg-[#F5F5F5] px-2 py-4 text-sm md:mx-0 md:text-base lg:w-1/2">
            <span className="mx-auto rounded-lg bg-white p-4 shadow-md">
              <h1 className="text-xl font-bold">Website</h1>
              <a
                className="hover:text-[#D55342]"
                href="http://www.ghanabiomedicalengineers.org/"
              >
                http://www.ghanabiomedicalengineers.org
              </a>
            </span>
            <span className="mx-auto rounded-lg bg-white px-8 py-4 shadow-md">
              <h1 className="text-xl font-bold">Industry</h1>
              <p>Hospitals and Health Care</p>
            </span>
            <span className="mx-auto rounded-lg bg-white px-8 py-4 shadow-md">
              <h1 className="text-xl font-bold">Company size</h1>
              <p> 1,001-5,000 employees</p>
            </span>
            <span className="mx-auto rounded-lg bg-white px-8 py-4 shadow-md">
              <h1 className="text-xl font-bold">Founded</h1>
              <p> 2011</p>
            </span>
          </div>
          <div className="w-full">
            <CoreValues />
          </div>
        </div>
        <div className="text-center align-middle leading-8 tracking-wide">
          <div className="p-10">
            <h1 className="text-left text-3xl font-bold">Overview</h1>
            <span className="flex flex-col gap-10 text-base">
              <p className="mt-4 text-left">
                The Ghana Society of Biomedical Engineers (GSBE) was established
                in 2011 and is duly registered under the Registrar
                General&apos;s Department as a professional association to
                represent the interests of biomedical engineering professionals
                in Ghana.
              </p>
              <section className="text-left">
                <h1 className="font-medium">
                  The GSBE was founded with the following aims and objectives:
                </h1>
                <ol className="mt-10 ml-10 flex list-decimal flex-col gap-4">
                  <li>
                    To encourage the development, dissemination, integration,
                    and utilization of knowledge in Biomedical Engineering.
                  </li>
                  <li>
                    To encourage and promote research in Biomedical Engineering
                    and Healthcare Technology and to promote quality healthcare
                    delivery in Ghana.
                  </li>
                  <li>
                    To exercise professional supervision over members with the
                    view of maintaining high standards of professional
                    competence and conduct.
                  </li>
                  <li>
                    {" "}
                    To foster the spirit of brotherliness and unity among
                    Biomedical Engineers in Ghana and the world at large.
                  </li>
                </ol>
              </section>
              <p className="text-left">
                Our membership cuts across all the regions in Ghana and
                currently, we have branches in all the administrative regions in
                Ghana. The GSBE is a member of the International Federation for
                Medical and Biological Engineering (IFMBE), a federation of
                national and transnational societies, and a Non-Governmental
                Organization (NGO) for the United Nations and the World Health
                Organization (WHO). We are also a member of the IFMBE Working
                Group for Africa Activities (IFBME WGAA) and currently serve on
                the Board of IFMBE WGAA and the IFMBE Publicity Board.
              </p>
            </span>
          </div>
          <div className="flex items-center justify-center py-4">
            <Link
              className="rounded-full bg-[#254152] p-4 text-base font-bold text-white uppercase"
              to="/support"
            >
              Support Us Today
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
