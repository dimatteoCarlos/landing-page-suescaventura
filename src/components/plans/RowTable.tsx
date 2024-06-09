//Row.tsx
//Parent: CardPlansBox.tsx

import { PlanRowsType } from '../../types/types';

type RowPropsType = {
  planRow: PlanRowsType;
  cardId: number | undefined;
};

function RowTable({ planRow, cardId }: RowPropsType) {
  const { rowId, concept, cost } = planRow;

  const keyRow = `card-${cardId}-${rowId}`;

  const changeAlign =
    concept.trim().split(' ').length == 1 ? 'changeToright' : 'left';

  return (
    <>
      {concept.length === 0 ? (
        //One Column row - no concept
        <div
          className={`card__plans__row card__plans__row--${rowId}`}
          key={keyRow}
        >
          <div className={`card__plans__row`}>
            <span className='currency'> $</span>
            {new Intl.NumberFormat(
              'es-ES'
              //  {
              //   style: 'currency',
              //   currency: 'COP',
              // }
            ).format(cost)}
          </div>
        </div>
      ) : (
        <div
          className={`card__plans__row card__plans__row--${rowId}`}
          key={keyRow}
        >
          <div
            className={`card__row__col card__row__col--${changeAlign}
         
            `}
          >
            {concept}
          </div>

          <div className={`card__row__col card__row__col--right`}>
            <span className='currency'> $</span>
            {new Intl.NumberFormat(
              'es-ES'
              //  {
              //   style: 'currency',
              //   currency: 'COP',
              // }
            ).format(cost)}
          </div>
        </div>
      )}
    </>
  );
}

export default RowTable;
