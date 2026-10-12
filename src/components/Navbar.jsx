import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about-me', label: 'About Me' },
    { 
      to: '/photography', 
      label: 'Photography',
      subLinks: [
        { to: '/dnc-2024', label: 'DNC 2024' }
      ]
    },
    { 
      to: '/publications', 
      label: 'Publications',
      subLinks: [
        { to: '/gagizhibaajiwan', label: 'Gagizhibaajiwan' }
      ]
    },
    { to: '/contact-me', label: 'Contact Me' },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        {links.map(link => (
          <li key={link.to} className={link.subLinks ? 'has-dropdown' : ''}>
            <Link 
              to={link.to}
              style={{ fontWeight: location.pathname === link.to ? '500' : '400' }}
            >
              {link.label}
            </Link>
            {link.subLinks && (
              <div className="dropdown-menu">
                {link.subLinks.map(subLink => (
                  <Link key={subLink.to} to={subLink.to}>
                    {subLink.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="navbar-line"></div>
    </nav>
  );
}

export default Navbar;
