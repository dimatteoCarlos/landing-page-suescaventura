import { DataImageType } from '../../types/types.ts';
type PhotoGroupPropsType = {
  images: DataImageType;
  page: number;
  photoGroup?: {
    idImg: number;
  }[];
  idImg: number;
};

function PhotoGroup({ page, photoGroup, images, idImg }: PhotoGroupPropsType) {
  return (
    <article
      className={`page__card gallery__photoGroup gallery__photoGroup--page--${page}`}
    >
      {photoGroup?.map((photo, i) => (
        <div
          className={`page__photoGroup__photo page__photoGroup__photo--${page} `}
          key={`photoGroup__${page}--${i}`}
        >
          <img
            key={`photoGroup__${page}__photo--${i}`}
            src={`${images[photo.idImg].imgUrl}`}
            alt={`${images[idImg]}`}
            className={`page__photoGroup page__photoGroup--photo--${i} page__photoGroup--${page}`}
          />
        </div>
      ))}
    </article>
  );
}

export default PhotoGroup;
