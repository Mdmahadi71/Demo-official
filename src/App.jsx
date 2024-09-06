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
