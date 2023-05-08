import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
// import { About } from './components/About/About';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Services } from './components/Services/Services';
// import { Contacts } from './components/Contacts/Contacts';
import { ProjectDetails } from './components/ProjectDetails/ProjectDetails';
// import { Info } from './components/Info/Info';
import { ServiceDetails } from './components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/portfolio/:projectId' element={<ProjectDetails />}/>
        <Route path='/services' element={<Services />} />
        <Route path='/services/details' element={<ServiceDetails />} />
        {/* <Route path='/contacts' element={<Contacts />}/> */}
        {/* <Route path='/about' element={<About />} /> */}
      </Routes>
      {/* <Info /> */}
      <Footer />
    </>

  );
}

export default App;
