import Link from 'next/link';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>

      <div className='nav-links'>
        <Link href="#" legacyBehavior>
          <a>Home</a>
        </Link>
        <Link href="#teams" legacyBehavior>
          <a>Team</a>
        </Link>
        <Link href="#projects" legacyBehavior>
          <a>Projects</a>
        </Link>
        <Link href="#testimonials" legacyBehavior>
          <a>Testimonials</a>
        </Link>
      </div>

      <div className='nav-button'>
        <button>
          <i className="fa-solid fa-hand-holding-dollar"></i> Donate
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
