import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login"; 
import App from "../App";
import Register from "../pages/auth/register";




function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<App />} /> 
            <Route path="login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
} 
export default AppRouter;