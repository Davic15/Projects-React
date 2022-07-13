import "./App.css";
import { RoutesPortfolio } from "./Router/RoutesPortfolio";
import ReactGA from 'react-ga';
const TRACKING_ID = 'G-RG4YCNVQMW';
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <RoutesPortfolio />
  );
}

export default App;
