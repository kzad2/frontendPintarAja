import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login"; 
import App from "../App";
import Register from "../pages/auth/register";
import MainLayout from "../layout/mainlayout";


function AppRouter() {
    return (
        <Routes>
            <Route element={<MainLayout />} >
                <Route path="/" element={<App />} /> 
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
} 
export default AppRouter;