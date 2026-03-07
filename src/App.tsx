import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Blog } from "./pages/Blog";
import { Announcements } from "./pages/Announcements";
import { Contact } from "./pages/Contact";
import { BlogDetail } from "./pages/Blogdetail";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hakkimda" element={<About />} />
              <Route path="/hizmetler" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/duyurular" element={<Announcements />} />
              <Route path="/iletisim" element={<Contact />} />
              <Route path="/blog/:id" element={<BlogDetail />} />{" "}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
