import React from 'react'
import './App.css';
import './responsive.css'
import AppRouters from './AppRouters.jsx'
import Auth from './components/context/auth.jsx'
function App() {
  return (
    <Auth>
      <AppRouters></AppRouters>
    </Auth>
    )

}
export default App;
