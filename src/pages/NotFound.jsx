import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-[#FFF7ED] py-60">
      <div className="max-w-7xl mx-auto px-4">
        <p className="font-bold text-4xl  leading-10 text-[#161616]">
          Sorry, the page you were looking for was not found.
        </p>
        <Link to="/">
          <button className="bg-[#161616] w-full my-10  rounded-sm font-bold text-lg leading-8 text-center text-white py-2">
            Return to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
