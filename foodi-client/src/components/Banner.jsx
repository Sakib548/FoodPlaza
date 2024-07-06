import React from "react";
import SpicyFoodImage from "/images/home/b-food1.png";
import BannerImage from "/images/home/banner.png";
const Banner = () => {
  return (
    <div
      className="section-container bg-gradient-to-r
    from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%"
    >
      <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* texts */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug">
            {" "}
            Dive into Delights of Delectable{" "}
            <span className="text-green">Food</span>
          </h2>
          <p className="text-xl text-[#4A4A4A]">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <button
            className="btn bg-green px-8 py-3 font-semibold text-white
          rounded-full"
          >
            Order now
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={BannerImage} alt="" />
          <div>
            <img src={SpicyFoodImage} alt="" className="rounded-2xl" />
            <div>
              <h5>Spicy Noodles</h5>
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-500"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
