import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import { Layout } from "./shared/components/Layout";

import { Login } from "./features/login/Login";
import { Dashboard } from "./features/dashboard/Dashboard";
import { Products } from "./features/products/Products";
import { Categories } from "./features/categories/Categories";
import { Orders } from "./features/orders/Orders";
import { Users } from "./features/users/Users";
import { Settings } from "./features/settings/Settings";
import { Account } from "./features/account/Account";

import { ProtectedRoute } from "./shared/components/ProtectedRoute";
import { DarkModeProvider } from "./shared/context/DarkModeContext";
import { DesktopOnly } from "./shared/components/DesktopOnly";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60 * 1000 } },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DesktopOnly>
        <Toaster toastOptions={{ className: "toast" }} />
        <DarkModeProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login />} />
              <Route
                element={
                  <ProtectedRoute>
                    <Layout />
                  </ProtectedRoute>
                }
              >
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/users" element={<Users />} />
                <Route path="/settings" element={<Settings />} />

                <Route path="/account" element={<Account />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </DarkModeProvider>
        {/* <ReactQueryDevtools /> */}
      </DesktopOnly>
    </QueryClientProvider>
  );
}
