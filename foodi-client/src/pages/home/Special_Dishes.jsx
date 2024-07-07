import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Cards from "./Cards";

const Special_Dishes = () => {
  const [recipes, setRecipes] = useState([]);
  const slider = useRef(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === "popular");

        setRecipes(specials);
      });
  }, []);

  // settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="section-container my-20">
      <div className="text-left">
        <p className="subtitle">Special Dishes</p>
        <h2 className="title md:w-[520px]">Standout Dishes From Our Menu</h2>
      </div>
      <Slider {...settings}>
        {recipes.map((item, i) => (
          <Cards key={i} item={item} />
        ))}
        <div>
          <h3>1</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Special_Dishes;
