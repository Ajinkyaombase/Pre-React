import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

import { Routes , Route} from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
///==========-------------------------------------------
import Header from './Header';
import Footer from './Footer';
import Post from './Post';
import Todo from './Todo';
import Navbar from './Navbar';
 import Body from './Body';
import User from './User';


function App(){
  
    return(
      <>

      <Header/>
      <Navbar/>
      <Routes>
        <Route path={"/post"}  element={ <Post/>}/>
        <Route path={"/todo"}  element={ <Todo/>}/>
        <Route path={"/user"}  element={ <User/>}/>
      </Routes>
      <Body/>
      <Footer/>

      </>

    )

}
export default App;

