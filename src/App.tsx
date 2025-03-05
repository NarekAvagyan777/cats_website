import "./App.scss";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { routeConfig } from "./routeConfig/routeConfig";

function App() {
  const routeValues = Object.values(routeConfig);

  return (
    <div className="page_wrapper">
      <Sidebar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          {routeValues.map((value) => (
            <Route key={value.path} path={value.path} element={value.element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
