import "./Header.css"
import { useLocation } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import NavigationDark from "../NavigationDark/NavigationDark";
function Header({ loggedIn }) {
 console.log(loggedIn)
 const { pathname } = useLocation();
 return (
  <>
   {pathname === '/' ? loggedIn ? <NavigationDark /> : <Navigation /> : <NavigationDark />}
  </>
 )
}
export default Header