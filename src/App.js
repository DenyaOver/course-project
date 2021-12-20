import './App.css';
import Nav from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music'
import {BrowserRouter, Route, Routes} from "react-router-dom"


const App = (props) => {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <div className='app-wrapper-content'>
      <Routes>
        <Route path = '/dialogs/*' element = {<Dialogs state={props.state.messagesPage} dispatch={props.dispatch}/>} />
        <Route path = '/profile/*' element = {<Profile state={props.state.profilePage} dispatch={props.dispatch}  />} />
        <Route path = '/news/*' element = {<News />} />
        <Route path = '/music/*' element = {<Music />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
