import { pages, images, lastPage } from './data/data-pages/dataPages.ts';
import Plans from './components/plans/Plans.tsx';
import LastPage from './components/pages/LastPage.tsx';

import PagesFlex from './components/pagesFlex/PagesFlex.tsx';


function App() {
  return (
    <>
        <PagesFlex pages={pages} images={images} />
        <Plans />
        <LastPage lastPage={lastPage} images={images} />
    </>
  );
}

export default App;
