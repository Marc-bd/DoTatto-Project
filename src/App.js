import AllRoutes from "./routes";
import React from "react";
import GlobalStyle from "./Styles/GlobalStyle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <AllRoutes />
    </>
  );
}

export default App;
