import { NavLink } from 'react-router-dom';
import nav from './Navbar.module.css';
const Nav = () => {
  return (
    <div className={nav.nav}>
      <div className={nav.item}><NavLink to='/profile'   className={navData => navData.isActive ? nav.active : nav.item}>Profile</NavLink></div>
      <div className={nav.item}><NavLink to='/dialogs'  className={navData => navData.isActive ? nav.active : nav.item}>Messages</NavLink></div>
      <div className={nav.item}><NavLink to='/news'  className={navData => navData.isActive ? nav.active : nav.item}>News</NavLink></div>
      <div className={nav.item}><NavLink to='/music'  className={navData => navData.isActive ? nav.active : nav.item}>Music</NavLink></div>
    </div>
  );
}
export default Nav