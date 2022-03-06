import React,{useState,useContext, Suspense ,lazy ,useEffect} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/styled-engine';
import LandingPage from './components/home/LandingPage';
import { XlviLoader } from "react-awesome-loaders";
// import Header from "./components/ui/Header";
import './components/ui/styles.css'


import { DarkThemeContext } from './context/DarkThemeContext';
// import ScrollTop from './components/ui/ScrollTop';

// import Footer from './components/ui/Footer';
// import ContactMe from './components/Contact/ContactMe';
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import { Presence } from './components/animated';
import { Loading } from './components/loading/Loading';
import './components/ui/styles.css'
// import Project from './components/projectmade/Project';

// import ScrollToTop from './components/ui/ScrollToTop';
// import AboutMe from './components/about/AboutMe';




const Header = lazy(()=>import("./components/ui/Header"))
const Footer = lazy(()=>import('./components/ui/Footer'))
const ContactMe = lazy(()=>import('./components/Contact/ContactMe'))
const Project = lazy(()=>import('./components/projectmade/Project'))
const ScrollToTop = lazy(()=>import('./components/ui/ScrollToTop'))
const AboutMe = lazy(()=>import('./components/about/AboutMe'))
const ScrollTop = lazy(()=>import('./components/ui/ScrollTop'))

function App(props) {
  const location  = useLocation();
  const [value,setValue] = useState(0);
  const [selectedIndex,setSelectedIndex] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    })
  }, [])
  
  const { dt,t} = useContext(DarkThemeContext)
  const [darkTheme] = dt;
  const [themeM] = t;
  


  

 
  return (
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={themeM} >
    {loading ?
        <div className='loder'>
          <XlviLoader
            className="loaderbolt"
            boltColor={"#FBFF00"}
            backgroundBlurColor={"#E0E7FF"}
          />
        </div> :
  
      <div style={{backgroundColor:darkTheme? '#171C28' :'#FFFFFF' ,height:'100%',width:'100%',}}>
      <Suspense fallback={<Loading />} >
    <ScrollTop   showBelow={120} />
    


      <Header   
      {...props}
      value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
      />
    <ScrollToTop />
    </Suspense>

     
  
    <Presence exitBeforeEnter >
    <Suspense fallback={<Loading />} >
  <Routes location={location} key={location.key} >
  <Route exact  path='/'  element={ <LandingPage/>} />
    <Route exact  path='/projects'  element={<Project />} />
     <Route exact  path='/contact'  element={<ContactMe />} />
     <Route exact  path='/about'  element={<AboutMe />} />
  </Routes>
  </Suspense>
  </Presence>

  <Suspense fallback={<Loading />} >
  <Footer />
  </Suspense>
 
     </div>
}
    </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
