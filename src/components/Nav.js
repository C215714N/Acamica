export const Nav = (props) =>{ return(
    <nav>
        <h1>Data Warehouse</h1>        
        <ul className="menu"> 
        { props.links.map( (link, i) =>
            <li key={i} onClick= { () => props.action( link.url === 'region' ? link.url : `${link.url}/${props.id}`, link.url, link.form ) } > {link.text} </li>
        )   }
        </ul>
    </nav>
)   }