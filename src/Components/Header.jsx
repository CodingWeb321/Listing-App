import { MdStar } from "react-icons/md";
import "../Styles/Header.css";

const Header = () => {
  return (
    <header className='main-header'>
      <div className='logo-container'>
        <span className='logo'>
          <MdStar style={{ color: "#007bff" }} /> Jobseeker
        </span>
      </div>
      <nav className='main-nav'>
        <a href='#jobs' className='active-link'>
          Jobs
        </a>
        <a href='#companies'>Companies</a>
        <a href='#about'>About Us</a>
      </nav>
      <div className='header-actions'>
        <div className='user-avatar'>A</div>
      </div>
    </header>
  );
};

export default Header;
