import React from 'react';
import AddNav from './navbar/Navbar.js'
import AddForm from './formfield/FormField'
import CoolButton from './coolbutton/CoolButton.js'

const App = () => {
  return (
    <>
      <div className='header'>
        <AddNav />
        <AddForm />
        <CoolButton />
      </div>

    </>
  )
};

export default App;
