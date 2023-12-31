import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Chat } from "./pages/Chat";
import { LoginPage } from "./pages/Auth/Login";
import { RegisterPage } from "./pages/Auth/Register";
import "./app.css";
import { ConfirmPage } from "./pages/Auth/Confirm";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Chat />} />
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="/confirm" element={<ConfirmPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
