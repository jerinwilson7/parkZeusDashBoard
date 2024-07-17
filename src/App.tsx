import { usePark } from "./contexts";
import { DashboardPage } from "./pages/DashboardPage";

function App() {
  const { isLoading } = usePark();

  return (
    <div className="App">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <DashboardPage />
      )}
    </div>
  );
}

export default App;
