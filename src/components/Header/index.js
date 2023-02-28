import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import "./index.css"

const navitems = [{ item: "Home", id: "HOME", path: "/" }, { item: "Services", id: "SERVICES", path: "/services" }, { item: "Career", id: "CAREER", path: "/career" }, { item: "About", id: "ABOUT", path: "/about" }, { item: "Contact Us", id: "CONTACT US", path: "/contact-us" }]

const Header = () => (
    <div className="HeaderCon d-flex justify-content-center p-1 ">
        <nav className="navCon p-2 d-flex justify-content-between align-items-center">
            <Link to="/"> <img className="focusLogo" alt="focusLogo" src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t39.30808-6/326596917_711622467088842_8280345592732594560_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dbC2LXZntwMAX-rbEsu&_nc_ht=scontent.fmaa10-1.fna&oh=00_AfDXSCxdzgtta34Z32Lr2zdQJr5feqrCQTx6SmR1UOAIZg&oe=63FBD0C8" /></Link>
            <ul className="d-flex list-unstyled m-0 navListCon justify-content-around flex-wrap">
                {navitems.map(obj => <li key={uuidv4()} className=""><Link to={obj.path} className="routerLinkUnsetStyles">{obj.item}</Link></li>)}
            </ul>
        </nav>
    </div>
)
export default Header