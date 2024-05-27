import '../../styles/style-pagesPosition.css';

import { DataImageType, PageType } from '../../types/types.ts';
type PagesPropsType = {
  pages: PageType[];
  images: DataImageType;
};

function PagesPosition({ pages, images }: PagesPropsType) {
  let logoIMg = '/logos/logoSuescaventuraWord-sinFondo.png';

  return (
    <>
      {pages &&
        pages.map((pag, indx) => {
          const {
            page,
            idImg,
            photoGroup,
            texts: { title, parr, parr1, parr2 },
          } = pag;

          return (
            <section
              className={`section__page section__page--${page}`}
              key={`page-${indx}`}
            >

<div className={`page__container page__container--${page}`}>

              <div className={`page__container page__container--${page}`}>
                <div className={`page__bgImg page__bgImg--${page}`}>
                  <img
                    src={`${images[idImg].imgUrl}`}
                    alt={`${images[idImg].imgUrl}`}
                    className={`page__bgImg page__bgImg--${page}`}
                  />
                </div>

                {page === 1 ? (
                  <img src={`${logoIMg}`} alt={`logo`} className='logo' />
                ) : null}

                <div
                  className={`page__card page__card--${page} page__card--parr--${page}`}
                >
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

                {parr2.length > 0 && (
                  <ul
                    className={`page__texts__paragraph page__text__paragraph__parr2 page__card page__card--parr2--${page}`}
                  >
                    {parr2.length > 0 &&
                      parr2.map((parr2Item, i) => (
                        <li
                          className={`page__parr2--item--${page} page__parr2--item`}
                          key={i}
                        >
                          {parr2Item}
                        </li>
                      ))}
                  </ul>
                )}
              </div>

              <article
                className={`page__card gallery__photoGroup gallery__photoGroup--page--${page}`}
              >
                {photoGroup!.length > 0 &&
                  photoGroup?.map((photo, i) => (
                    <div
                      className={`page__photoGroup__photo page__photoGroup__photo--${page} `}
                      key={`photoGroup__${page}--${i}`}
                    >
                      <img
                        key={`photoGroup__${page}__photo--${i}`}
                        src={`${images[photo.idImg].imgUrl}`}
                        alt={`${images[idImg]}`}
                        className={`page__photoGroup page__photoGroup--${page} page__photoGroup--${page}--${i}`}
                      />
                    </div>
                  ))}
              </article>

  </div>
            </section>
          );
        })}
    </>
  );
}

export default PagesPosition;
