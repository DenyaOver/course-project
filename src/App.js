import './App.css';
import Nav from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <div className='app-wrapper-content'>
      <Routes>
        <Route path = '/dialogs/*' element = {<DialogsContainer store={props.store}/>} />
        <Route path = '/profile/*' element = {<Profile store={props.store}  />} />
        <Route path = '/news/*' element = {<News />} />
        <Route path = '/music/*' element = {<Music />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
    
  );
}


export default App;
