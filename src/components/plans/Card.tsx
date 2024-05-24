import CardFigure from './CardFigure';
import '../../styles/style-plans.css';
import Row from './Row';

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

        <div className='card__plan__container'>
          <div className='card__plans__image__box'>
            <CardFigure cardFigurePlan={cardFigurePlan} />
          </div>
          <div className='card__plans__box'>
            <div className='card__plans__box cardTableHead'>
              {cardTableHead}
            </div>

            {planRows.map((planRow, _) => {
              const { rowId } = planRow;
              const keyRow = `card-${cardId}-${rowId}`;
              return <Row planRow={planRow} cardId={cardId} key={keyRow} />;
            })}
          </div>
        </div>


    </>
  );
}

export default Card;
