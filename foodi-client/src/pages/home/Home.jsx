import Banner from "../../components/Banner";
import Categories from "./Categories";
import OurServices from "./OurServices";
import Special_Dishes from "./Special_Dishes";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Special_Dishes />
      <Testimonials />
      <OurServices />
    </div>
  );
};

export default Home;
