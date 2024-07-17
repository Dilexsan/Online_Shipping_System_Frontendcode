
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';

import Login from './users/Login';
import Signup from './users/Signup';
import AddDetails from './users/AddDetails';
import ViewDetail from './users/ViewDetail';
import EditDetail from './users/EditDetail';
import Afterlogin from './users/Afterlogin';
import Footer from './layout/Footer';
import './users/Signup.css';
import Adminview from './users/Adminview';
import Userviewdetail from './users/Userviewdetail';



function App() {
  return (
    <div className="App">
     
     <div>

     <Router>
     <Navbar/>

     <Routes>
      <Route exact path="/" element={<Home/>}/>

      <Route exact path="/login" element ={<Login/>}/>
      <Route exact path="/signup" element ={<Signup/>}/>
      <Route exact path="/adddetails" element ={<AddDetails/>}/>
      <Route exact path="/viewdetail/:id" element ={<ViewDetail/>}/>
      <Route exact path="/editdetail/:id" element ={<EditDetail/>}/>
      <Route exact path="/signup" element ={<Signup/>}/>
      <Route exact path="/afterlogin" element ={<Afterlogin/>}/>
      <Route exact path="/adminview" element ={<Adminview/>}/>
      <Route exact path="/userviewdetail" element ={<Userviewdetail/>}/>


     </Routes>
      </Router>

      </div>

      <div>
        <Footer/>
      </div>
</div>
    
  );
}

export default App;
