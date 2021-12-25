import './App.css';
import Nav from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <div className='app-wrapper-content'>
      <Routes>
        <Route path = '/dialogs/*' element = {<DialogsContainer />} />
        <Route path = '/profile/*' element = {<Profile />} />
        <Route path = '/users/*' element = {<UsersContainer />} />
        <Route path = '/news/*' element = {<News />} />
        <Route path = '/music/*' element = {<Music />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
    
  );
}


export default App;
