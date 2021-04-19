const Nav = (props) =>{
    <nav>
        <h1>Data Warehouse</h1>        
        <Links links={props.links} />
    </nav>
}
const Links = (props) => {
    <ul className="menu">
        { props.links.map( (link, i) => <li key={i}>{link} </li> ) }
    </ul>
}
export default Nav;