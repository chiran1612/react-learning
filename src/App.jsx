// LEARNING: App.jsx is the root component. It sets up navigation (routing)
// so different "pages" render depending on the URL — without reloading the page.
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ConditionalRendering from './pages/ConditionalRendering.jsx'
import Forms from './pages/Forms.jsx'
import './App.css'
import Bugfind from './pages/BugFind.jsx'
import Form_my from './pages/Form_my.jsx'
function App() {
  return (
    <>
      <header>
        <h1>React Learning App</h1>
        {/* LEARNING: NavLink is like <a>, but it does client-side navigation.
            "end" means "/" only matches exactly the home page.
            NavLink adds an "active" CSS class automatically when the URL matches. */}
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/conditional-rendering">Conditional rendering</NavLink>
          <NavLink to="/forms">Forms</NavLink>

          <NavLink to="/forms_my">Forms</NavLink>
          <NavLink to="/bug-find">Bug Find</NavLink>
        </nav>
      </header>

      {/* LEARNING: <Routes> looks at the URL and renders the matching component */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About author="React Learner" />} />
          <Route
            path="/conditional-rendering"
            element={<ConditionalRendering />}
          />
          <Route path="/forms" element={<Forms />} />
          <Route path="/forms_my" element={<Form_my />} />
           <Route
            path="/bug-find"
            element={<Bugfind />}
          />
          {/* LEARNING: "*" is a catch-all for unknown URLs */}
          <Route path="*" element={<p>❌ Page not found</p>} />
        </Routes>
      </main>


      
    </>
  )
}

export default App
