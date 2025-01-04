//CardPlansBox.tsx
//Parent: Card.tsx

import { CardTypeProp } from './Card.tsx';

import RowTable from './RowTable.tsx';

function CardPlansBox({
  cardTableHead,
  planRows,
  cardId,
}: Partial<CardTypeProp['planCard']>) {
  return (
    <div className='card__plans__box'>
      <div className='card__plans__box cardTableHead'>{cardTableHead}</div>

      {planRows?.map((planRow, _) => {
        const { rowId } = planRow;
        const keyRow = `card-${cardId}-${rowId}`;
        return <RowTable planRow={planRow} cardId={cardId} key={keyRow} />;
      })}
    </div>
  );
}

export default CardPlansBox;
