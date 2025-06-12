import { Link } from "react-router";

export const NotFound = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="mb-4 text-6xl font-bold text-red-600">404</h1>
      <h2 className="mb-2 text-3xl font-semibold">Page Not Found</h2>
      <p className="mb-8 text-lg">
        The page you are looking for does not exist.
      </p>
      <Link className="text-lg text-blue-500 hover:underline" to="/">
        Go to Homepage
      </Link>
    </div>
  );
};
