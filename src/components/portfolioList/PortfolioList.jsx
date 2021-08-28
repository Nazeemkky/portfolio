import "./portfolioList.scss"


export default function PortfolioList({ li, active, setSelected }) {
    return (

        <li className={active ? "portfolioList active" : "portfolioList"} id={li.id} onClick={() => setSelected(li.id)}>
{li.title}
        </li>
     
    )
}
