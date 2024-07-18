import { usePark } from "./contexts/MainContext";
import { DashboardPage } from "./pages/DashboardPage";

function App() {
  const { isLoading } = usePark();

  return (
    <div className="bg-main-bg w-screen h-full flex flex-col overscroll-y-auto">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <DashboardPage />
      )}
    </div>
  );
}

export default App;
