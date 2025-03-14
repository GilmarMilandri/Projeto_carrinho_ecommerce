import { Link } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi"

export function Header() {

    return (
      <header className="w-full px-1 bg-slate-200">
        <nav className="w-full max-w-7xl">
            <Link to="/">
            Dev Shop
            </Link>

            <Link to="/cart">
            <FiShoppingCart size={24} color="#121212"/>
            </Link>
        </nav>
      </header>
  
    )
  }