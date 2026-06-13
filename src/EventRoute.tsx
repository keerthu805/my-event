import { Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import Signin from "./Signin";
import Signup from "./Signup";
import Events from "./Events";
import TalentHunt from "./TalentHunt";
import Emprovement from "./Emprovement";
import Arts from "./Arts";
import Startup from "./Startup";
import Register from "./Register";
import Pagenotfound from "./pagenotfound";

export default function EventRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Mainpage />}></Route>
                <Route path="Mainpage" element={<Mainpage />}></Route>
                <Route path="Signin" element={<Signin />}></Route>
                <Route path="Signup" element={<Signup />}></Route>
                <Route path="Events" element={<Events />}></Route>
                <Route path="TalentHunt" element={<TalentHunt />}></Route>
                <Route path="Emprovement" element={<Emprovement />}></Route>
                <Route path="Arts" element={<Arts />}></Route>
                <Route path="Startup" element={<Startup />}></Route>
                <Route path="Register" element={<Register />}></Route>
                <Route path="*" element={<Pagenotfound/>}></Route>


            </Routes>
        </>
    )
}