import Logo from '../logo.svg'
import { NavLink } from 'react-router-dom'
export const Nav = (props) => {  return(
    <nav>
        <header>
            <img className="logo" src={Logo} alt={props.title} />
            <h1>{props.title}</h1>
        </header>        
        <ul className="menu"> 
            { props.links.map( (link, i) => <NavLink key={i} to={link.url} activeClassName="active" onClick= { () => props.action( link.url === 'region' ? link.url : `${link.url}/${props.id}`, link.url, link.form ) }> { link.text } </NavLink>  )   } 
        </ul>
    </nav>
)   }