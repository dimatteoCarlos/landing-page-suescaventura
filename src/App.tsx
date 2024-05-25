// import { Parallax } from 'react-parallax';
import Pages from './components/pages/Pages.tsx';
import { pages, images, lastPage } from './data/data-pages/dataPages.ts';
import Plans from './components/plans/Plans.tsx';
import LastPage from './components/pages/LastPage.tsx';

function App() {
  return (
    <>
      <Pages pages={pages} images={images} />
      <Plans />
      <LastPage lastPage={lastPage} images={images} />
    </>
  );
}

export default App;
