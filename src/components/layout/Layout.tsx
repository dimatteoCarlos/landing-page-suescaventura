import { PropsWithChildren } from 'react';

import './layout.css'

const Layout = ({ children }: PropsWithChildren) => {
  return <section className='layout'>
  
  {children}
  
  </section>;
};

export default Layout;
