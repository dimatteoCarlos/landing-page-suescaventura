import SocialMedia from '../social-media/SocialMedia';
import './style-navbar.css';

function Navbar() {
  return (
    <>
      <nav>
      <span className='btnPlans__container'>
          {/* <button className=' btnPlans'> */}
            <a href='#planes' rel='noreferrer'>
              planes
            </a>
          {/* </button> */}
        </span>
        <SocialMedia isColored={false} />

      </nav>
    </>
  );
}

export default Navbar;
