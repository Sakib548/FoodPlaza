import React, { useEffect, useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  //loading

  useEffect(() => {
    //fetched data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        setMenu(data);
        setFilteredItems(data);
      } catch (err) {
        console.log("Error fetching data");
      }
    };
    //call the function
    fetchData();
  }, []);

  //filtering data based on category
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
  };
  return (
    <div>
      {/* // menu banner */}
      <div
        className="section-container bg-gradient-to-r
    from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%"
      >
        <div className="py-48 flex flex-col  justify-center items-center gap-8">
          {/* texts */}
          <div className="text-center space-y-7 px-4">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug">
              {" "}
              Dive into Delights Of Delectable
              <span className="text-green"> Food</span>
            </h2>
            <p className="text-xl text-[#4A4A4A] md:w-4/5 mx-auto">
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
        </div>
      </div>
      {/* // menu shop section */}
      <div className="section-container"></div>
    </div>
  );
};

export default Menu;
