import { Routes, Route } from "react-router-dom";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ContactUS from "./Pages/contact-us";
import News from "./Pages/News";
import FAQs from "./Pages/FAQs";
import TermsConditions from "./Pages/terms-and-conditions";

const App = () => {
  return (
    <>
      <ScrollToTop /> {/* Add this component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/News" element={<News />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/PrivacyPolicy" element={<ContactUS />} />
        <Route path="/Terms-and-conditions" element={<TermsConditions />} />

        {/* Other routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;