import Navagation from "../../components/Navagation";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navagation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
