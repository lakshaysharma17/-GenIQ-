import HomePage from "@/modules/landing/pages/HomePage";
import Dashboard from "@/modules/user/pages/Dashboard";
import Login from "@/modules/user/pages/Login";
import NotFound from "@/modules/user/pages/NotFound";
import Register from "@/modules/user/pages/Register";
import { Routes,Route} from "react-router-dom";

const AppRoutes=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login></Login>}/> 
            <Route path="/register" element={<Register/>}/>
            <Route path = "*" element={<NotFound/>}/>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}/>

        </Routes>
        </>
    )
}
export default AppRoutes;