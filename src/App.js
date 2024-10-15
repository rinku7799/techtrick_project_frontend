import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollTop/scrollTop";
import routesData from "./routes/route";
import Layout from "./Layout/Layout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          {routesData.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
