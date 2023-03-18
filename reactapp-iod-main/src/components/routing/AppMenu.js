import { Outlet, Link } from "react-router-dom";

/*
const AppMenu = () => {
  return (
    <>
      <nav >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contextproviderexample">Context Provider Example</Link>
          </li>
          <li>
            <Link to="/hookusestate">useState Hook Exampel</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="https://terminustech.co.nz" target="_blank" >About Us</a>
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};
*/

function AppMenu (){
  return (
    <>
      
      <nav >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contextproviderexample">Context Provider Example</Link>
          </li>
          <li>
            <Link to="/hookusestate">useState Hook Exampel</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          
          <li>
            <Link to="/muibutton">MUI Button</Link>
          </li>

          <li>
            <Link to="/muisignin">MUI SignIn</Link>
          </li>

          <li>
            <Link to="/muicard">MUI Card</Link>
          </li>

          <li>
            <a href="https://terminustech.co.nz" target="_blank" >About Us</a>
          </li>
          
        </ul>
      </nav>

      <Outlet />
      
    </>
  )
}

export default AppMenu;