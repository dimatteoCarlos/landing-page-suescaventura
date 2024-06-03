import Card from './Card';
import '../../styles/style-plans.css';

import { dataPlans } from '../../data/data-plans/dataPlans.ts';
import Navbar from '../navbar/Navbar.tsx';

function Plans() {
  return (
    <>
      {dataPlans &&
        dataPlans.map((page, ipage) => {
          const { pageId, pageTitle, parr, parr1, plans, pageBgImage } = page;

          const keyPage = `plans-page-${ipage}-${pageId}`;

          return (
            <section
              className={`section__plans section__plans--${pageId}`}
              key={`page-${ipage}`}
              id={`${pageId === 9 ? 'planes' : pageId}`}
              style={{backgroundImage:`url(/planBgImg/${pageBgImage})`}}
            >
              <Navbar />
              <div
                className={`plans__page__container plans__page__container--${pageId}`}
              >
                {pageId === 9 && (
                  <p className='plan__card  seguro__medico'>
                    Cada persona contará con seguro de asistencia médica, cada
                    uno estará equipado con los sistemas de seguridad
                    necesarios, equipos certificados, bajo la instrucción
                    especializada de guías calificados.
                  </p>
                )}

                <div
                  className={`plan__card pagePlan__container pagePlan__container--${pageId}`}
                  key={keyPage}
                >
                  <header
                    className={`pagePlan__header pagePlan__header--${pageId}`}
                  >
                    <div className='pagePlan__header--title'>{pageTitle}</div>

                    <p
                      className={`pagePlan__header--parr pagePlan__header__parr--${pageId}`}
                    >
                      {parr}
                    </p>
                    <p className={`pagePlan__parr1 pagePlan__parr1--${pageId}`}>
                      {parr1}
                    </p>
                  </header>

                  {plans.map((plan, iplan) => {
                    const { planId, planTitle, planCards } = plan;

                    const keyPlan = `page-${ipage}-plan-${iplan}-${planId}`;

                    return (
                      <div
                        className={`plan__container plan__container--${planId}`}
                        key={keyPlan}
                      >
                        <div
                          className={`plan--title plan--title--${planId}`}

                        >
                          {planTitle}
                        </div>
                        <div
                          className={`plan__cards__container plan__cards__container--${iplan}`}
                        >
                          {planCards.map((card, icard) => (
                            <Card
                              planCard={card}
                              key={`page-${page}-plan-${iplan}-card-${icard}`}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}
    </>
  );
}

export default Plans;
