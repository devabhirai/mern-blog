import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Projects from "./pages/Projects"
import Dashborad from "./pages/Dashborad"
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element= {<Home/>}/>
      <Route path = "about" element= {<About/>}/>
      <Route path = "sign-up" element= {<SignUp/>}/>
      <Route path = "sign-in" element= {<SignIn/>}/>
      <Route path = "projects" element= {<Projects/>}/>
      <Route path = "dashboard" element= {<Dashborad/>}/>

      
    </Routes>
    </BrowserRouter>
  )

}
