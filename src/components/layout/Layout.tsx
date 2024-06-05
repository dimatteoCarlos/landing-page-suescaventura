import Navbar from '../navbar/Navbar.tsx';

type LayoutPropsType = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutPropsType) {
  return (
    <>
      <div className='navbar__layout'>
        <Navbar />
      </div>
      <div className='app__container'>{children}</div>
    </>
  );
}

export default Layout;
