// import { Parallax } from 'react-parallax';
import Pages from './components/pages/Pages.tsx';
import { pages, images } from './data/data-pages/dataPages.js';
import Plans from './components/plans/Plans.tsx';



function App() {
  return (
    <>
      <Pages pages={pages} images={images} />
      <Plans />
    </>
  );
}

export default App;
