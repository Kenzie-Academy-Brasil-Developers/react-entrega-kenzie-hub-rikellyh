import RoutesMain from "./routes";
import GlobalStyle from "./styles/Globalstyle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Providers from "./contexts/Providers";

function App() {
  return (
    <Providers>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <RoutesMain />
    </Providers>
  );
}

export default App;
