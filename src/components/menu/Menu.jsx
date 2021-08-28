import "./menu.scss"
import { Home, PermIdentity,Work, AttachMoney, Contacts} from '@material-ui/icons';
export default function Menu({ menuOpen, setMenuOpen}) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <div className="icon"><Home /></div>
                    <a href="#intro">Intro</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <div className="icon"><PermIdentity /></div>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <div className="icon"><Work /></div>
                    <a href="#works">Works</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <div className="icon"><AttachMoney /></div>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <div className="icon"><Contacts /></div>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
