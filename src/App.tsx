import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import PaginatedCarList from "./components/PaginatedCarList";
import { useEffect } from "react";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") navigate("/1");
  }, [navigate, location]);

  return (
    <>
      <NavBar />
      <main className="mx-auto mt-8 max-w-[1200px]">
        <Routes>
          <Route path="/:page" element={<PaginatedCarList />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
