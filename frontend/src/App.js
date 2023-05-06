// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddCarPage from "./pages/AddCarPage/AddCarPage";

import SearchPage from "./pages/SearchPage/SearchPage";
import VideoPage from './pages/VideoPage/VideoPage';
import PageComponent from "./pages/PageComponent/PageComponent";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
// import SearchBar from "../components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>}/> */}
        {/* <Route path="/addcar" element={<PrivateRoute><AddCarPage/></PrivateRoute>}/> */}

        <Route path="/" element={<SearchPage/>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/videopage" element={<PrivateRoute><VideoPage /></PrivateRoute>} />
        <Route path="/pc" element={<PrivateRoute><PageComponent /></PrivateRoute>} />
        
        
        {/* add a fourth route for the VideoPage, can use Private if you would like  (otherwise you can use conditional rendering) */}
        {/* In order to get the  comment form to appear you willneed to be signed in which is where a ternary which  
        will say if the user is signed in then you can add a comment but in the case they are not there will be a note to sign in to leave a comment */}
        
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
