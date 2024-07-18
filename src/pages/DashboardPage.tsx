import { Footer } from "../components/Footer";
import { MainLayout } from "../components/MainLayout";
import { NavBar } from "../components/NavBar";
import { usePark } from "../contexts/MainContext";

export const DashboardPage = () => {
  const { isLoading } = usePark();
  return (
    <div className="relative">
      {isLoading ? (
        <div className="flex items-center justify-center">Loading ....</div>
      ) : (
        <>
          <NavBar />
          <MainLayout />
          <Footer/>
        </>
      )}
    </div>
  );
};
