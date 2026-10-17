import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="font-montserrat flex justify-center items-center h-screen">
        <div className="flex flex-col space-y-3 items-center">
          <h1 className="text-4xl text-orange-600 font-bold">
            404 - Page Not Found
          </h1>
          <p className="text-lg text-gray-600">
            Sorry, the page you are looking for does not exist.
          </p>
          {/* link to home with arrow emoji from react library */}
          <Link
            to={`/`}
            className="flex items-center gap-2 hover:underline text-lg text-orange-400 underline-offset-[1.5px]"
          >
            Go to Home <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
