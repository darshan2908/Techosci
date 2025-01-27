import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Blog = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Benefits />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default Blog;
