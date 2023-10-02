import CarList from "./components/CarList";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <header className="mx-auto mt-2 flex h-[90px] max-w-[1200px] items-center rounded-3xl bg-accent pl-6 font-saira shadow-md">
        <NavBar />
      </header>
      <main className="mx-auto mt-8 max-w-[1200px]">
        <CarList />
      </main>
    </>
  );
}
