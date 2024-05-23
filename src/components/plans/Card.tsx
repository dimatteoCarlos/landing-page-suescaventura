import CardFigure from './CardFigure';

type CardTypeProp = {
  planCard: {
    cardId: number;
    cardFigurePlan: string[];
    cardTableHead: string;
    planRows: {
      rowId: number;
      concept: string;
      cost: number;
    }[];
  };
};
function Card({ planCard }: CardTypeProp) {
  const { cardId, cardFigurePlan, cardTableHead, planRows } = planCard;

  return (
    <>
      <div className='card__plans__container'>
        <div className='card__plans__image__box'>
          <CardFigure cardFigurePlan={cardFigurePlan} />
          <div className='card__plans__title'>
            {cardTableHead}

            {planRows.map((planRow, _) => {
              const { rowId, concept, cost } = planRow;
              const keyRow = `card-${cardId}-${rowId}`;
              return (
                <div className={`card__plans__row--${rowId}`} key={keyRow}>
                  <div className={`card__row__col card__row__col--left`}>
                    {concept}
                  </div>

                  <div className={`card__row__col card__row__col--right`}>
                    $
                    {new Intl.NumberFormat(
                      'es-ES'
                      //  {
                      //   style: 'currency',
                      //   currency: 'COP',
                      // }
                    ).format(cost)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
