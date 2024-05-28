import SocialMedia from '../social-media/SocialMedia';
import './style-navbar.css';

function Navbar() {
  return (
    <>
      <nav>
        <SocialMedia  />
        {/* <SocialMedia isColored={true} /> */}
      </nav>
    </>
  );
}

export default Navbar;
