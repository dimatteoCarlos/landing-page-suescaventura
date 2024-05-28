import SocialMedia from '../social-media/SocialMedia';
import './style-navbar.css';

function Navbar() {
  return (
    <>
      <nav>
        <SocialMedia isColored={false} />
      </nav>
    </>
  );
}

export default Navbar;
