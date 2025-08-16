import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter , Route , Routes , Navigate } from "react-router-dom";
import { QueryClient , QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Dashboard from "./pages/Dashboard";
import Cabins from "./pages/Cabins";
import Bookings from "./pages/Bookings";
import Users from "./pages/Users";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";
import Settings from "./pages/Settings";
import BookingPage from "./pages/BookingPage";
import CheckIn from "./pages/CheckIn";
import ProtectedRoute from "./ui/ProtectedRoute";
//create react query client

const queryClient = new QueryClient({
  defaultOption:{
    queries:{
      staleTime: 0
    }
  }
})
function App() {
  return (
 <>
 <QueryClientProvider client={queryClient}>
  <ReactQueryDevtools initialIsOpen={false}/>
 <BrowserRouter>
    <GlobalStyles/>
    <Routes>
      <Route path="/" element={<ProtectedRoute><AppLayout/></ProtectedRoute>}>
       {/* index path */}
      <Route index element={<Navigate replace to="/dashboard"/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/cabins" element={<Cabins/>}/>
      <Route path="/bookings" element={<Bookings/>}/>
      <Route path="/bookings/:bookingId" element={<BookingPage/>}/>
      <Route path="/checkin/:bookingId" element={<CheckIn/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="/settings" element={<Settings/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
    <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
 </QueryClientProvider>
 </>
  )
}

export default App
