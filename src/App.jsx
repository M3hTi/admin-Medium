import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./features/authentication/Login";
import DashboardLayout from "./features/dashboard/DashboardLayout";
import HomeUser from "./features/dashboard/HomeUser";
import ProtectRoute from "./ui/ProtectRoute";
import ArticleDetail from "./features/dashboard/ArticleDetail";
import CreateAdmin from "./features/dashboard/CreateAdmin";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectRoute>
                <DashboardLayout />
              </ProtectRoute>
            }
          >
            <Route index element={<HomeUser />} />
            <Route path=":id" element={<ArticleDetail />} />
            <Route path="create" element={<CreateAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </QueryClientProvider>
  );
}

export default App;
