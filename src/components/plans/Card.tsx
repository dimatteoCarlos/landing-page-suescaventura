//Card.tsx
//Parent: Plans.tsx

import '../../styles/style-plans.css';
import CardFigure from './CardFigure';
import CardPlansBox from './CardPlansBox';

export type CardTypeProp = {
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

const isCostShown = false;

function Card({ planCard }: CardTypeProp) {
  const { cardId, cardFigurePlan, cardTableHead, planRows } = planCard;

  return (
    <>
      <div className='card__plan__container'>
        <div className='card__plans__image__box'>
          <CardFigure cardFigurePlan={cardFigurePlan} />
        </div>

        {isCostShown && (
          <CardPlansBox
            cardTableHead={cardTableHead}
            planRows={planRows}
            cardId={cardId}
          />
        )}
      </div>
    </>
  );
}

export default Card;
