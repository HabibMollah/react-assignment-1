import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import PaginatedCarList from "./components/PaginatedCarList";
import { useEffect } from "react";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/1");
  }, [navigate]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/:page" element={<PaginatedCarList />} />
      </Routes>
    </>
  );
}
