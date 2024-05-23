type CardFigurePropType = {
  cardFigurePlan: string[];
};
export default function CardFigure({ cardFigurePlan }: CardFigurePropType) {
  return (
    <>
      <div className='card__figure__container'>
        {cardFigurePlan.map((figName, ifig) => (
          <img
            // src={`/figures/${figName}.png`}
            src={`/figures/${figName}-removebg-preview.png`}
            alt={`figure-${figName}-${ifig}`}
            key={`${figName}-fig-${ifig}`}
          />
        ))}
      </div>
    </>
  );
}
