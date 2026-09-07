import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          {/* Left side (Home) */}
          <div className="left-side">
            <Link to="/" className="home-link">
              <><span>Williams syndrome</span><small>Motor Development</small></>
            </Link>
          </div>

          {/* Right side (Navigation) */}
          <nav className="nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <span>/</span><Link to="/milestones" className="nav-link">
              Milestones
            </Link>
            <span>/</span><Link to="/about" className="nav-link">
              About this resource
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
