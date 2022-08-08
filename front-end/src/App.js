import './App.css';
import {BrowserRouter as Router, Routes ,Route, Link} from 'react-router-dom'


import Admin from './admin/Admin';
import User from './user/User';
import NewUser from './user/NewUser';
import NewAdmin from './admin/newAdmin';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route path='/' element={<Home />}/>
        <Route path='admin' element={<Admin />}/>
        <Route path='user' element={<User />}/>
        <Route path='user/newUser' element={<NewUser />}/>
        <Route path='NewAdmin' element={<NewAdmin />}/>
      </Routes>
     </Router>
    </div>
  );
}

function Home(){
  return (<div>
    <Link to='/admin'>Admin</Link><br /><br/>
    <Link to='/user'>User</Link>
  </div>)
}

export default App;
