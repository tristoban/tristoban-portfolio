import React from 'react' //comando rafce y te tira esto
import Main from './components/main/Main'
import Nav from './components/nav/Nav'
import Knowledge from './components/knowledge/Knowledge'
import Projects from './components/projects/Projects'
import Past from './components/past/Past'
import Contact from './components/past/Past'

const App = () => {
  return ( //mobile first!
    <div> 
        <Main /> 
        <Nav /> 
        <Knowledge /> 
        <Projects /> 
        <Past /> 
        <Contact />
    </div>
  )
}

export default App


// DIV esta es la disposición general, acordate de hacer el skeleton y una pantalla de carga
// MAIN presentación con titulo, nombre, foto, about, etc...
// NAV flotante tanto en mobile como en desktop
// KNOWLEDGE espacio para tecnologias conocidas, estaría bueno que al clickearlas aparezca un modal explicando que es y alguna info especifica
// PROJECTS esto es facil, unas tarjetas que apunten a los githubs de otros proyectos Y a sus deploys
// PAST info util para algunas empresas como estudios y/o experiencia laboral
// CONTACT como contactarme, links directos y posiblemente un qr por si se ve desde la pc...








