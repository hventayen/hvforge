import { Link, useMatch, useResolvedPath } from "react-router-dom"
import title from './assets/websiteTitle.png';

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className= "site-title">
            <img src={title} alt="logo" width="180px" height="40px"/>
            </Link>
            <ul className="links">
                <CustomLink to="/projects">Projects</CustomLink>
                <CustomLink to="/experience">Experience</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}