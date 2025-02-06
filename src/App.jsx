import { Routes, Route } from "react-router-dom";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ContactUS from "./Pages/contact-us";
import News from "./Pages/News";
import FAQs from "./Pages/FAQs";
import AboutUS from "./Pages/about-us";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/Terms-and-conditions";


const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/News" element={<News />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/about-us" element={<AboutUS />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Terms-and-conditions" element={<TermsConditions />} />

        <Route path="*" element={<NotFound />} />{/* 404 routes */}
      </Routes>
    </>
  );
};

export default App;