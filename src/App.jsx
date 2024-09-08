import './App.css';
import Layout from './Components/Layout';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Collage from './Pages/Collage';
import Students from './Pages/Students';
import Guardian from './Pages/Guardian';
import Contact from './Pages/Contact';
import Principal from './Pages/Principal';
import Chistory from './Pages/Chistory';
import Infrastructure from './Pages/Infrastructure';
import Facilities from './Pages/Facilities';
import Teacher from './Pages/Teacher';
import Employee from './Pages/Employee';
import Empty from './Pages/Empty';
import Notice from './Pages/Notice';
import ClassRoutine from './Pages/ClassRoutine';
import ExamRoutine from './Pages/ExamRoutine';
import GuradialPanel from './Pages/GuradialPanel';
import AddInformation from './Pages/AddInformation';
import Complaint from './Pages/Complaint';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/coll" element={<Collage />} />
        <Route path="/student" element={<Students />} />
        <Route path="/guardian" element={<Guardian />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/history" element={<Chistory />} />
        <Route path="/infras" element={<Infrastructure />} />
        <Route path='/facilities' element={<Facilities/>}/>
        <Route path='/teacher' element={<Teacher/>}/>
        <Route path='/employee' element={<Employee/>}/>
        <Route path='/empty' element={<Empty/>}/>
        <Route path='/notice' element={<Notice/>}/>
        <Route path='/class' element={<ClassRoutine/>}/>
        <Route path='/ExamRou' element={<ExamRoutine/>}/>
        <Route path='/garPanel' element={<GuradialPanel/>}/>
        <Route path='/Addinfor' element={<AddInformation/>}/>
        <Route path='/Complaint' element={<Complaint/>}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
