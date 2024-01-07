
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homes from "./pages/homes/Homes";
import Login from "./components/navbar/login/Login";
import Jobdetail from "./components/jobdetail/Jobdetail";
import Signup from "./components/navbar/signin/Signup";
import Contact from './components/contact/Contact'
import MyFlter from './components/Test/MyFlter'
import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/dashboard/Sidebar";
import Resume from "./components/home/resume/Resume";
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/my" element={<MyFlter />} />
          <Route path="/job/:id" element={<Jobdetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard dash="Dashboard" />} />
          <Route path="/dashboard" element={<Sidebar dash="Dashboard" />} />
          <Route path="/upload" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
