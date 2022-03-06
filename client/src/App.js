import React, { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddForm from './Components/Admin/AddForm';
import ListeUser from './Components/Admin/ListeUser';
import Alerts from './Components/Alerts';
import Quiz from './Components/Formateur/Quiz';
import Home from './Components/Home';
import Menu from './Components/Menu';
import PrivateRoute from './Components/PrivateRoute';
import Profile from './Components/Profile';
import Room from './Components/Room';
import SignUp from './Components/Signup/SignUp';
import { getCurrent } from './redux/actions/authActions';

function App() {
  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(getCurrent())
  },[dispatch])
  return (
    <div className="App">
      {/* <SignUp></SignUp> */}
      <Menu></Menu>
      <Alerts></Alerts>
      <Routes>
      <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/SignUpIn" element={<SignUp></SignUp>} ></Route>
        <Route path='/Profile' element={<PrivateRoute><Profile/></PrivateRoute>}></Route>
        <Route path='/Profile/Add' element={<PrivateRoute><AddForm></AddForm></PrivateRoute>}/>
        <Route path='/Profile/users' element={<PrivateRoute><ListeUser></ListeUser></PrivateRoute>}/>
        <Route path='/Profile/CreateQuiz' element={<PrivateRoute><Quiz/></PrivateRoute>}/>
        <Route path='/Profile/Class' element={<PrivateRoute><Room></Room></PrivateRoute>}/>

   

        
      </Routes>
     
    </div>
  );
}

export default App;
