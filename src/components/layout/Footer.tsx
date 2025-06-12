import { Link } from "react-router";

const ContactUs = () => {
  return (
    <div className="text-xs text-[#254152]">
      <div className="grid grid-cols-1 gap-2">
        <h1 className="text-lg font-black">CONTACT US</h1>

        <span>P.O.Box 905 Korle Bu</span>

        <span>Accra, Ghana</span>

        <span>
          <a href="gbse@email.com">bmes.gh@gmail.com</a>
        </span>
      </div>
    </div>
  );
};

const ConnectWithUs = () => {
  return (
    <div className="text-xs text-[#254152]">
      <div className="grid grid-cols-1 gap-2">
        <h1 className="text-lg font-black">CONNECT WITH US</h1>

        <span>
          <a href="https://www.facebook.com">Facebook</a>
        </span>

        <span>
          <a href="https://x.com">X</a>
        </span>

        <span>
          <a href="https://www.linkedin.com/company/officialgsbe">LinkedIn</a>
        </span>

        <span>
          <a href="https://www.instagram.com">Instagram</a>
        </span>
      </div>
    </div>
  );
};

const Policies = () => {
  return (
    <div className="text-xs text-[#254152]">
      <div className="grid grid-cols-1 gap-2">
        <h1 className="text-lg font-black">POLICIES</h1>

        <span>
          <Link to="">Terms & Conditions</Link>
        </span>

        <span>
          <Link to="">Privacy Policy</Link>
        </span>

        <span>
          <Link to="">Accessibility Statement</Link>
        </span>
      </div>
    </div>
  );
};

const Subscribe = () => {
  return (
    <div className="flex text-xs text-[#254152]">
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-black">SUBSCRIBE</h1>
        <form className="border-transparent focus-within:border lg:space-x-3">
          <input
            className="w-1/2 border-0 border-b-2 border-[#87979F] bg-[#EAEAE8] py-2 text-sm font-light placeholder-[#747473] hover:border-b-4 focus:border-[#636362] focus:outline-none"
            placeholder="Email here "
            type="text"
          />

          <button
            className="rounded-full border-[#254152] bg-[#254152] px-7 py-2 font-medium text-[#ffffff] hover:border hover:bg-white hover:text-[#254152]"
            type="button"
          >
            Join
          </button>
        </form>
      </div>
    </div>
  );
};
export const Footer = () => {
  return (
    <footer className="bottom-0 w-full bg-[#EAEAE8] px-4 pt-4 pb-16 md:pt-10 lg:px-52">
      <div className="grid grid-cols-1 justify-center gap-4 text-center leading-relaxed tracking-wider md:grid-cols-4 md:gap-0 md:px-0 md:text-left">
        <ContactUs />
        <ConnectWithUs />
        <Policies />
        <div className="mx-auto md:mx-0">
          <Subscribe />
        </div>
      </div>
    </footer>
  );
};
