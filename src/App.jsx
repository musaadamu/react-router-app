import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Body from './pages/Body';
import Department from "./components/Department"
import DepartmentDetail from "./components/DepartmentDetail"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans from "./pages/Host/HostVans"
import HostVanDetail from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import '../server'
import './App.css'
import Footer from './components/Footer';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="department" element={<Department />} />
//           <Route path="Department/:id" element={<DepartmentDetail />} />
          
//           <Route path="host" element={<HostLayout />}>
//             <Route index element={<Dashboard />} />
//             <Route path="income" element={<Income />} />
//             <Route path="reviews" element={<Reviews />} />
//             <Route path="vans" element={<HostVans />} />
//             <Route path="vans/:id" element={<HostVanDetail />}>
//               <Route index element={<HostVanInfo />} />
//               <Route path="pricing" element={<HostVanPricing />} />
//               <Route path="photos" element={<HostVanPhotos />} />
//             </Route>
//           </Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

function App() {
  return (
    
    <BrowserRouter>
    <div class="header">
        <Link to="/" >#VANLIFE</Link>
        <nav class="nav-links">
            <Link to="/vans">Projects</Link>
            <Link to="/about">About</Link>
        </nav>
    </div>
        <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/vans' element={<HostVans/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App;