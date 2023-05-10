import React from "react";

const Reviews = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="flex items-center">
        <h1 className="font-bold text-3xl mb-8 leading-6 text-[#161616]">
          Your reviews
        </h1>{" "}
        <h4 className="text-[#4D4D4D] ml-5 font-medium leading-6 mb-[31px] text-base">
          last <span className="font-bold underline">30 days</span>
        </h4>
      </div>
      <div className="mb-8">
        <h4 className="text-[#161616] flex font-bold leading-6 text-3xl">
          5.0 <img className="mx-4" src="/assets/Star.png" />{" "}
          <span className="font-medium text-base leading-5 ">
            overall rating
          </span>
        </h4>
      </div>
      <img src="/assets/chart2.png" />
      <h2 className="font-bold text-lg mt-5 leading-7 text-[#161616]">
        Reviews (2)
      </h2>
      <div>
        {[1, 2].map((index) => {
          return (
            <div key={index} className="border-b-2 border-b-gray-400 py-4  ">
              <div className="flex gap-1 mt-2">
                <img src="/assets/Star.png" />
                <img src="/assets/Star.png" />
                <img src="/assets/Star.png" />
                <img src="/assets/Star.png" />
                <img src="/assets/Star.png" />
              </div>
              <h4 className="font-semibold text-base leading-8 text-[#161616]">
                Elliot
                <span className="text-gray-400 ml-2">December 1, 2022</span>
              </h4>
              <p className="font-medium text-base leading-6 text-[#161616]">
                The beach bum is such as awesome van! Such as comfortable trip.
                We had it for 2 weeks and there was not a single issue. Super
                clean when we picked it up and the host is very comfortable and
                understanding. Highly recommend!
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
