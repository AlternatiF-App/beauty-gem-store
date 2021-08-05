import './App.css';
import Homepage from './Homepage';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {useEffect, useState} from 'react'

function App() {

  const [state, setstate] = useState("light")
  localStorage.theme = state

  // useEffect(() => {
  //   if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //     document.documentElement.classList.add('dark')
  //   } else {
  //     document.documentElement.classList.remove('dark')
  //   }
  // }, [localStorage.theme])

  const toggleDark=()=>{
    if(state === 'light'){
      setstate("dark")
    }else{
      setstate("light")
    }
  }

  const toggleFull=()=>{
    document.documentElement.requestFullscreen().catch((e) => {
      console.log('full', e)
    })
  }

  return (
    // <div class="bg-white h-screen dark:bg-gray-800 transition duration-500 ease-in-out">
    //     <h1 class="text-gray-900 dark:text-white transition duration-500 ease-in-out">Dark mode is here!</h1>
    //       <p class="text-gray-600 dark:text-gray-300 transition duration-500 ease-in-out">
    //         Lorem ipsum...
    //         {localStorage.theme}
    //       </p>

    //     <button onClick={toggleDark} className="bg-red-500 rounded-full h-5 w-5">
          
    //     </button>
    // </div>
    <Router>
      {/* <Route exact path="/"> */}
        <Homepage/>
      {/* </Route> */}
    </Router>
  );
}

export default App;
