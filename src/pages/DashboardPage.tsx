import { MainLayout } from "../components/MainLayout";
import { NavBar } from "../components/NavBar";
import { usePark } from "../contexts";

export const DashboardPage = () => {
  const { isLoading } = usePark();
  return (
    <div className="bg-main-bg w-screen h-screen">
      {isLoading ? (
        <div className="flex items-center justify-center">Loading ....</div>
      ) : (
        <>
          <NavBar />
          <MainLayout />
        </>
      )}
    </div>
  );
};
