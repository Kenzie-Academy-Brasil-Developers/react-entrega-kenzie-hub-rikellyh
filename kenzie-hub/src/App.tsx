import RoutesMain from "./routes";
import GlobalStyle from "./styles/Globalstyle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import { DashboardProvider } from "./contexts/DashboardContext";

function App() {
  return (
    <AuthProvider>
      <DashboardProvider>
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
      </DashboardProvider>
    </AuthProvider>
  );
}

export default App;
