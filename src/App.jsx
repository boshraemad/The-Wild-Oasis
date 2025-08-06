import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter , Route , Routes , Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cabins from "./pages/Cabins";
import Bookings from "./pages/Bookings";
import Users from "./pages/Users";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles/>
    <Routes>
      <Route path="/" element={<AppLayout/>}>
       {/* index path */}
      <Route index element={<Navigate replace to="/dashboard"/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/cabins" element={<Cabins/>}/>
      <Route path="/bookings" element={<Bookings/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/account" element={<Account/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
