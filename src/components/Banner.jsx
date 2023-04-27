import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" h-full">
      <img
        className="w-full object-cover h-full absolute -z-10"
        src="/assets/image1.webp"
      />
      <div className="max-w-7xl mx-auto px-4   text-white">
        <div className="pt-40">
          <h2 className="text-5xl leading-10 py-10 font-extrabold mb-6">
            You got the travel plans, we got the travel vans.
          </h2>
          <h3 className="leading-6 text-base font-medium mb-12">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </h3>
          <Link to="/vans">
            <button className="font-bold text-base w-full leading-8 text-center py-3 bg-[#FF8C38] rounded-md">
              Find your van
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
