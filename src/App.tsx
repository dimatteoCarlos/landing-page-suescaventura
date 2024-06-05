import { pages, images, lastPage } from './data/data-pages/dataPages.ts';
import Plans from './components/plans/Plans.tsx';
import LastPage from './components/lastpage/LastPage.tsx';
import PagesFlex from './components/pagesFlex/PagesFlex.tsx';
import Layout from './components/layout/Layout.tsx';

function App() {
  return (
    <>
    <Layout>
        <PagesFlex pages={pages} images={images} />
        <Plans />
        <LastPage lastPage={lastPage} images={images} />
      </Layout>
    </>
  );
}

export default App;
