import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import PaginatedCarList from "./components/PaginatedCarList";
import { useEffect } from "react";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") navigate("/1");
  }, [navigate, location]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/:page" element={<PaginatedCarList />} />
      </Routes>
    </>
  );
}
