import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import ListingDetails from "./pages/ListingDetails";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Register from "./pages/Register"
import LogIn from "./pages/LogIn"
import AgentFinder from "./pages/AgentFinder"
import SellHome from './pages/sellHome'
import FilterListings from "./pages/FilterListing";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import './App.css';
import CustomizedSnackbars from "./components/snackBar"
import BackdropLoading from "./components/BackDropLoading"


function App() {

  return (
    <>
      <BrowserRouter>
          <Layout>
          <CustomizedSnackbars />
          <BackdropLoading />
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/listings/:Ppage" element={<Listings/>}/>
              <Route exact path="/listings/search/:sale_type&:min_price&:max_price&:bedrooms&:home_type&:sqft&:keywords&:Ppage"
                            element={<FilterListings/>}/>
              <Route exact path="/listing_details/:slug" element={<ListingDetails/>}/>
              <Route exact path="/aboutus" element={<AboutUs/>}/>
              <Route exact path="/contact" element={<Contact/>}/>
              <Route exact path="/agentFinder" element={<AgentFinder/>}/>
              <Route exact path="/sell_home" element={<SellHome/>}/>
              <Route exact path="/Register" element={<Register/>}/>
              <Route exact path="/Login" element={<LogIn/>}/>
            </Routes>
          </Layout> 
      </BrowserRouter>

    </>
  );
}

export default App;