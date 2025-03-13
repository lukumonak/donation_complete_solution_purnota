import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import Publication from './Pages/Publication';
import Donate from './Pages/Donate';
import Login from './Pages/Login';
import SpecialAccess from './Pages/SpecialAccess';
import Signup from './Pages/Signup';
import AdminPanel from './Pages/AdminPanel';
import OrgAccess from './Pages/OrgAccess';
import OrgaRegForm from './Pages/OrgaRegForm';
import Panding from './Pages/Panding';
import { useAuthContext } from './hooks/useAuthContext';
import Fmessage from './Pages/Fpage/Fmessage';
import AccessDenied from './Pages/Fpage/AccessDenied';


function App() {
  const user = useAuthContext()
  console.log('!user', user.user)


  return (
    <BrowserRouter>

      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route path='/aboutus' element={<AboutUs />}></Route>
        <Route path='/publication' element={<Publication />}></Route>
        <Route path='/fmessage' element={<Fmessage />}></Route>
        <Route path='/accessdenied' element={<AccessDenied />}></Route>
        <Route exact path='/login' element={<Login />}></Route>


        {user.user === null ? (
          <>
            <Route path='/donate' element={<Fmessage />}/>
            <Route path='/signuporg' element={<Fmessage />} />



          </>
        ) : (
          <>
         <Route path='/donate' element={<Donate />} />
            <Route path='/signuporg' element={<OrgaRegForm />} />

          </>
        )}

        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/access' element={<SpecialAccess />}></Route>
        <Route path='/admin' element={<AdminPanel />}></Route>
        <Route path='/org' element={<OrgAccess />}></Route>
        <Route path='/ing' element={<Panding />}></Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;


//role based authorization