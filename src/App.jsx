import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import StudentsTable from "./Components/StudentTable/StudentsTable";

export default function App() {
  return (
    <>
      <div className="bg-[#172227] font-[Inter] text-white">
        <Header />
        <Hero Title="The Future of Learning starts with students at the center" />
        <StudentsTable />
        <Footer />
      </div>
    </>
  );
}
