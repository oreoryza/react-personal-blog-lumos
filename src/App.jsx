import React, { useEffect, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import About from "./pages/About";

const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./components/BlogDetail"));
const NewsLetterPage = lazy(() => import("./pages/NewsLetterPage"));

function App() {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/newsletter" element={<NewsLetterPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:year/:month/:day/:id" element={<BlogDetail />} />
            <Route path="/blog/detail/:year/:month/:day/:id" element={<BlogDetail />} />
            <Route path="/newsletter/detail/:year/:month/:day/:id" element={<BlogDetail />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;