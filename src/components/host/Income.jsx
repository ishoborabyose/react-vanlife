import { Link } from "react-router-dom";

const Income = () => {
  return (
    <div className="max-w-7xl px-4 mx-auto">
      {" "}
      <h1 className="font-bold text-4xl mb-11 leading-6 text-[#161616]">
        Income
      </h1>{" "}
      <h4 className="text-[#4D4D4D] font-medium leading-6 mb-[31px] text-base">
        last <span className="font-bold underline">30 days</span>
      </h4>
      <h1 className="text-5xl leading-10 mb-[57px] font-extrabold text-[#161616]">
        $2,226
      </h1>
      <img src="/assets/chart.png" />
      <div className="flex justify-between pt-9 pb-8">
        {" "}
        <h1 className="font-bold text-2xl leading-6 text-[#161616]">
          Your transactions (3)
        </h1>{" "}
        <h4 className="text-[#4D4D4D] font-medium leading-6 text-base">
          last <span className="font-bold underline">30 days</span>
        </h4>
      </div>
      <section className="pb-6">
        {[1, 2, 3].map((index) => {
          return (
            <Link className="" to={`/host/vans/`} key={index}>
              <div className="bg-white mt-3 py-5 px-6 flex justify-between items-center">
                <h1 className="text-[#161616] font-semibold text-4xl leading-8">
                  $980
                </h1>
                <h4 className="text-[#161616] font-medium text-base leading-6 ">
                  23/11/22
                </h4>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default Income;
