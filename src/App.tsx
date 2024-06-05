import { pages, images, lastPage } from './data/data-pages/dataPages.ts';
import Plans from './components/plans/Plans.tsx';
import LastPage from './components/lastpage/LastPage.tsx';
import PagesFlex from './components/pagesFlex/PagesFlex.tsx';

function App() {
  return (
    <>
      {/* <div className='app__container'> */}
        <PagesFlex pages={pages} images={images} />
        <Plans />
        <LastPage lastPage={lastPage} images={images} />
      {/* </div> */}
    </>
  );
}

export default App;
