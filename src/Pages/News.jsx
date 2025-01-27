import ButtonGradient from "../assets/svg/ButtonGradient";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Services from "../components/Services";

const News = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Services />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default News;