import "./App.css";
import { RoutesPortfolio } from "./Router/RoutesPortfolio";
import useGATracker from "./useGATracker";

function App() {
  useGATracker();

  return (
    <RoutesPortfolio />
  );
}

export default App;
