import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar bg-base-300">
            <div className="flex-1 ml-3">
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">
                    Xavier Brasher
                </Link>
            </div>
            <div className="flex-none mr-3">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link to={"/portfolio"}>Portfolio</Link>
                    </li>
                    <li className="ml-2">
                        <Link to={"/contactme"}>Contact Me</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
