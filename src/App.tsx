import { pages, images, lastPage } from './data/data-pages/dataPages.ts';
import Plans from './components/plans/Plans.tsx';
import LastPage from './components/pages/LastPage.tsx';

import PagesFlex from './components/pagesFlex/PagesFlex.tsx';
import Navbar from './components/navbar/Navbar.tsx';
import Layout from './components/layout/Layout.tsx';

function App() {
  return (
    <>
        {/* <Navbar /> */}
        <PagesFlex pages={pages} images={images} />
        <Plans />
        <LastPage lastPage={lastPage} images={images} />
    </>
  );
}

export default App;
