import "./Header.css"
import { useLocation } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import NavigationDark from "../NavigationDark/NavigationDark";
function Header() {
 const { pathname } = useLocation();
 return (
  <>
   {pathname === '/' ? <Navigation /> : <NavigationDark />}
  </>
 )
}
export default Header