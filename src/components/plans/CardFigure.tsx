//CardFigure.tsx
//Parent: Card.tsx

type CardFigurePropType = {
  cardFigurePlan: string[];
};

export default function CardFigure({ cardFigurePlan }: CardFigurePropType) {
  return (
    <>
      <div className='card__figure__container'>
        {cardFigurePlan.map((figName, ifig) => (
          <img
            className={`card__figure card__figure--${figName}`}
            src={`/figures/${figName}-removebg-preview.svg`}
            alt={`figure-${figName}-${ifig}`}
            key={`${figName}-fig-${ifig}`}
          />
        ))}
      </div>
    </>
  );
}
