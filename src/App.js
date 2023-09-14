import React from "react";
import Header from "./Component/Header";
import { route } from "./Common/Route";
import Footer from "./Component/Footer";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter(route);
const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
      <Footer />
    </>
  );
};

export default App;
