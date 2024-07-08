import Banner from "../../components/Banner";
import Categories from "./Categories";
import Special_Dishes from "./Special_Dishes";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Special_Dishes />
      <Testimonials />
    </div>
  );
};

export default Home;
