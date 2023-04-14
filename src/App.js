import "./App.css";
import { createContext } from "react";
import { useProducts } from "./data";
import Productpage from "./Productpage";
import "bootstrap/dist/css/bootstrap.min.css";
export const MyContext = createContext();
function App() {
  const data = useProducts();

  return (
    <MyContext.Provider value={data}>
      <div className="border border-dark p-5">
        <Productpage />
      </div>
    </MyContext.Provider>
  );
}

export default App;
