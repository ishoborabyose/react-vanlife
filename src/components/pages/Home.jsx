import Footer from "../Footer";
import Banner from "../Banner";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
      <div className="relative h-screen">
        <Navbar />
        <Banner />
        <Footer />
      </div>
    </>
  );
}

export default Home;
