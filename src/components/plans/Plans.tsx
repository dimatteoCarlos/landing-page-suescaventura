import Card from './Card';
// import './style-plans.css';


import { dataPlans } from '../../data/data-plans/dataPlans.ts';

function Plans() {
  console.log(dataPlans);

  return (
    <>
      {dataPlans &&
        dataPlans.map((page, ipage) => {
          const { pageId, pageTitle, parr, parr1, plans } = page;

          const keyPage = `plans-page-${ipage}-${pageId}`;

          return (
            <div
              className={`pagePlan__container pagePlan__container--${pageId}`}
              key={keyPage}
            >
              <div className={`pagePlan__title pagePlan__title--${pageId}`}>
                {pageTitle}
                <p className={`pagePlan__parr--${pageId}`}>{parr}</p>
                <p className={`pagePlan__parr1--${pageId}`}>{parr1}</p>
              </div>

              {plans.map((plan, iplan) => {
                const { planId, planTitle, planCards } = plan;

                const keyPlan = `page-${ipage}-$-plan-${iplan}-${planId}`;

                return (
                  <div
                    className={`plan__container plan__container--plan--${planId}`}
                    key={keyPlan}
                  >
                    <div className={`plan--title plan--title--${planId}`}>
                      {/* <span>{planId}. </span> */}
                      <span>{planTitle}</span>
                    </div>

                    
                    {planCards.map((card, icard) => 
                     (
                     <Card planCard={card} key={`page-${page}-plan-${iplan}-card-${icard}`} />
                    )
                    )}
                    
                  </div>
                );
              })}
            </div>
          );
        })}
    </>
  );
}

export default Plans;
