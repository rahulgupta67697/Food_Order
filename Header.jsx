import { Link } from "react-router-dom";
function Header()
{
    return(
        <>
        <div className='nav-bar'>
            <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTGbqwyV8W0q3E8lHgb4zBVG50KrJl8uYPbw&s"/>
            <h2 id='Main-head'>The Restro of Nazz</h2>
          <div className='txt-nav'> 
            
           <a> <Link to="/">Home</Link></a>
            <a><Link to="/about/1">About</Link></a>
            <a id="te-3"><Link to="/contact/1">Contact</Link></a>
            <a><Link to="/reslist/1">Restaurant Menu</Link></a>
             <button className="btn5">Login</button>
    </div>
</div>
    
        </>
    )
}
export default Header;