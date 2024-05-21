// import { Parallax } from 'react-parallax';
import { pages, images } from './data/dataPages.js';

import './styles/style-pages.css';

function App() {
  let logoIMg = '/logos/logoSuescaventuraWord-sinFondo.png';

  return (
    <>
      {pages.map((pag, indx) => {
        const {
          page,
          idImg,
          photoGroup,
          texts: { title, parr, parr1, parr2 },
        } = pag;

        console.log(images[idImg].imgUrl);

        return (
          <section
            className={`section__page section__page--${page}`}
            key={`page-${indx}`}
          >
            <div className={`page__container page__container--${page}`}>
              {page === 1 ? (
                <img src={`${logoIMg}`} alt={`logo`} className='logo' />
              ) : (
                ''
              )}

              <div className={`page__bgImg page__bgImg--${page}`}>
                <img
                  src={`${images[idImg].imgUrl}`}
                  alt={`${images[idImg].imgUrl}`}
                  className={`page__bgImg page__bgImg--${page}`}
                />
              </div>

              <div className={`page__card page__card--parr--${page}`}>
                <span
                  className={`page__texts--title page__texts--title--${page}`}
                >
                  {title}
                </span>

                <p
                  className={`page__texts__paragraph page__text__paragraph__parr page__texts_paragraph__parr--${page}`}
                >
                  {parr}
                </p>
              </div>

              {parr1 && (
                <p
                  className={`page__card page__card--parr1--${page} page__texts__paragraph page__text__paragraph__parr1 page__texts_paragraph__parr1--${page}`}
                >
                  {parr1}
                </p>
              )}
              <ul
                className={`page__texts__paragraph page__text__paragraph__parr2 page__card page__card--parr2--${page}`}
              >
                {parr2.map((parr2Item, i) => (
                  <li
                    className={`page__parr2--item--${page} page__parr2--item`}
                    key={i}
                  >
                    {parr2Item}
                  </li>
                ))}
              </ul>
            </div>

            <article
              className={`page__card gallery__photoGroup gallery__photoGroup--page--${page}`}
            >
              {photoGroup.length > 0 &&
                photoGroup.map((photo, i) => (
                  <div
                    className={`page__photoGroup__photo page__photoGroup__photo--${page} `}
                    key={`photoGroup__${page}--${i}`}
                  >
                    <img
                      src={`${images[photo.idImg].imgUrl}`}
                      alt={`${images[idImg]}`}
                      className={`page__photoGroup page__photoGroup--${page} page__photoGroup--${page}--${i}`}
                      style={{ backgroundColor: 'red' }}
                    />
                  </div>
                ))}
            </article>
          </section>
        );
      })}
    </>
  );
}

export default App;
