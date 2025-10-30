import { Link } from "react-router";
import "./Header.css";

export function Header() {
    return (
        <header>
            <Link to="/" className="header-left-side">
                <img src="./logo.png" />
                <h1 className="header-name">Plantus</h1>
            </Link>
            <div className="header-right-side">
                <input placeholder="Search" />
                <button>Account</button>
                <button>My Garden</button>
            </div>
        </header>
    );
}
