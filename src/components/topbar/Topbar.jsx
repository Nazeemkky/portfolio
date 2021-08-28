import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"
export default function Topbar({ menuOpen, setMenuOpen}) {



    const clickHandler= ()=>{
        setMenuOpen(!menuOpen)
    }







    return (
        <div className={"topbar " + ( menuOpen && "active")}>
            <div className="wrapper">
<div className="left">
<a href="#intro" className="logo">nexzom</a> 
<div className="itemContainer">
    <Person className="icon" />
    <span><a href="tel:+94778843327" style={{textDecoration: "none", color: "inherit"}}>+94 77 88 4 3327</a></span>
</div>
<div className="itemContainer">
   <Mail className="icon" />
    <span><a href="mailto:nazeemkky123@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>nexzomsmma@gmail.com</a></span>
</div>
</div>
<div className="right">
<div className="hamburget" onClick={clickHandler}>
<span className="line1"></span>
<span className="line2"></span>
<span className="line3"></span>
</div>
</div>
            </div>

        </div>
    )
}
