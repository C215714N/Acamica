const Nav = (props) => { return (  
    <nav>
        <ul>
            { props.links.map((link, index) =>  
                <li key={index}><a href={link}>{link}</a></li>
            ) }
        </ul>
    </nav>
)   }
export default Nav;