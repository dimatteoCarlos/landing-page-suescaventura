//dataPlans.ts

import { PlansType } from '../../types/types';

export const figureNames: string[] = [
  'caminata',
  'cabalgata',
  'escalada',
  'rappel',
  'ferrata',
  'espeleismo',
];

export const dataPlans: PlansType[] = [
  //page
  {
    pageId: 9,
    pageTitle: 'Planes suescAventura',
    parr: 'inversión',
    parr1:
      'Se han preparado diferentes combinaciones de actividades para que escojan la opción que más les guste.',
    pageBgImage: 'image-038.png',

    plans: [
      {
        planId: 1,
        planTitle: '1. Caminata',
        planCards: [
          {
            cardId: 1,
            cardFigurePlan: ['caminata'],
            cardTableHead: 'Valor por recorrido',
            planRows: [{ rowId: 1, concept: 'Desde ', cost: 114000 }], //planRows
          }, //end of card
        ], //end of planCards
      }, //end of plans per page
      {
        planId: 2,
        planTitle: '2. Cabalgata',
        planCards: [
          {
            cardId: 1,
            cardFigurePlan: ['cabalgata'],
            cardTableHead: 'Valor por persona',
            planRows: [{ rowId: 1, concept: '', cost: 45000 }], //planRows
          }, //card
        ], //planCards
      }, //plan
      {
        planId: 3,
        planTitle: '3. Escalada en roca (25m), una ruta',
        planCards: [
          {
            cardId: 1,
            cardFigurePlan: ['escalada'],

            cardTableHead: 'Valor por persona',
            planRows: [
              { rowId: 1, concept: '1 persona: ', cost: 75000 },
              { rowId: 2, concept: '2 en adelante:', cost: 50000 },
            ], //planRows
          }, //card
        ], //planCards
      }, //plan

      //start plan
      {
        planId: 4,
        planTitle: '4. Rappel (25m), una línea de descenso',
        planCards: [
          {
            cardId: 1,
            cardFigurePlan: ['rappel'],
            cardTableHead: 'Valor por persona',
            planRows: [{ rowId: 1, concept: '', cost: 75000 }], //planRows
          }, //end card
        ], //end planCards
      }, //end plan
    ], //plans
  }, //end page

  //start page
  {
    pageId: 10,
    pageTitle: '',
    parr: '',
    parr1: '',
    pageBgImage: 'image-038.png',

    plans: [
      //start plan
      {
        planId: 5,
        planTitle:
          '5. Escalada (25m) 1 ruta O Rappel (25m) 1 línea de descenso + Cabalgata',
        planCards: [
          {
            cardId: 1,
            cardFigurePlan: ['escalada', 'plus', 'cabalgata'],
            cardTableHead: 'Valor por persona',
            planRows: [
              { rowId: 1, concept: '1 persona:', cost: 115000 },

              { rowId: 2, concept: '2 en adelante:', cost: 90000 },
            ], //planRows
          }, //card
          //card
          {
            cardId: 2,
            cardFigurePlan: ['rappel', 'plus', 'cabalgata'],
            cardTableHead: 'Valor por persona',
            planRows: [
              { rowId: 1, concept: '1 persona:', cost: 115000 },

              { rowId: 2, concept: '2 en adelante:', cost: 90000 },
            ], //planRows
          }, //card
        ], //planCards
      }, //end plan

      //start plan
      {
        planId: 6,
        planTitle:
          '6. Escalada (25m) 1 ruta + Rappel (25m) 1 línea de descenso O Escalada (25m) 2 rutas',

        planCards: [
          {
            cardId: 1,
            cardFigurePlan: ['escalada', 'plus', 'rappel'],

            cardTableHead: 'Valor por persona',
            planRows: [
              { rowId: 1, concept: '1 persona: ', cost: 110000 },
              { rowId: 2, concept: '2 en adelante:', cost: 90000 },
            ], //planRows
          }, //end card
          //start card
          {
            cardId: 2,
            cardFigurePlan: ['escalada'],

            cardTableHead: 'Valor por persona',
            planRows: [
              { rowId: 1, concept: '1 persona: ', cost: 110000 },
              { rowId: 2, concept: '2 en adelante:', cost: 90000 },
            ], //end planRows
          }, //end card
        ], // end planCards
      }, //end plan

      //start plan
      {
        planId: 7,
        planTitle:
          '7. Escalada (25m) 1 ruta + Caminata (2,5 horas) O Rappel (25m) 1 línea de descenso + Caminata',

        planCards: [
          {
            cardId: 1,
            cardFigurePlan: ['escalada', 'plus', 'caminata'],

            cardTableHead: 'Valor por persona',
            planRows: [
              { rowId: 1, concept: '1 persona: ', cost: 180000 },
              { rowId: 2, concept: '2 en adelante:', cost: 110000 },
            ], //end planRows
          }, //end card

          //start card
          {
            cardId: 2,
            cardFigurePlan: ['rappel', 'plus', 'caminata'],

            cardTableHead: 'Valor por persona',
            planRows: [
              { rowId: 1, concept: '1 persona: ', cost: 180000 },
              { rowId: 2, concept: '2 en adelante:', cost: 110000 },
            ], //planRows
          }, //end card
        ], //planCards
      }, //end plan
    ], //end plans
  }, //end page

  //start page
  {
    pageId: 11,
    pageTitle: '',
    parr: '',
    parr1: '',
    pageBgImage: 'image-038.png',

    plans: [
      {
        planId: 8,
        planTitle: '8. Ascenso en vía Ferrata + Caminata',
        planCards: [
          //start of card
          {
            cardId: 1,
            cardFigurePlan: ['ferrata', 'plus', 'caminata'],
            cardTableHead: 'Valor por persona',
            planRows: [
              { rowId: 1, concept: '1 persona:', cost: 160000 },
              { rowId: 2, concept: '2 en adelante:', cost: 105000 },
            ], //planRows
          }, //end of card
        ], //planCards
      }, //end of plan

      //start of plan
      {
        planId: 9,
        planTitle:
          '9. Escalada en roca medio día (4h) O Escalada en rutas de más de 100m de altura',
        planCards: [
          {
            cardId: 1,
            cardFigurePlan: ['escalada'],
            cardTableHead: 'Valor por persona',
            planRows: [
              { rowId: 1, concept: '1 persona:', cost: 190000 },
              { rowId: 2, concept: '2 en adelante:', cost: 110000 },
            ], //end of planRows
          }, //end of card
        ], //end of planCards
      }, //end of plan

      {
        planId: 10,
        planTitle: '10. Caminata + Espeleismo (cuevas)',
        planCards: [
          //start of card
          {
            cardId: 1,
            cardFigurePlan: ['caminata', 'plus', 'espeleismo'],
            cardTableHead: 'Valor por persona',
            planRows: [
              { rowId: 1, concept: '1 persona:', cost: 180000 },
              { rowId: 2, concept: '2 en adelante:', cost: 115000 },
            ], //planRows
          }, //end of card
        ], //planCards
      }, //end of plan

      //start of plan
      {
        planId: 11,
        planTitle:
          '11. Escalada (25m)  1  ruta + Rappel (25m)  1  línea de descenso + Cabalgata',
        planCards: [
          {
            cardId: 1,
            cardFigurePlan: ['escalada', 'plus', 'rappel', 'plus', 'cabalgata'],
            cardTableHead: 'Valor por persona',
            planRows: [
              { rowId: 1, concept: '1 persona:', cost: 155000 },
              { rowId: 2, concept: '2 en adelante:', cost: 135000 },
            ], //end of planRows
          }, //end of card
        ], //end of planCards
      }, //end of plan
    ], //end of plans per page
  }, //end of page

  //start of page
  {
    pageId: 12,
    pageTitle: '',
    parr: '',
    parr1: '',
    pageBgImage: 'image-038.png',

    plans: [
      {
        planId: 12,
        planTitle:
          '12. Escalada (25m) 1 ruta + Rappel (25m) 1 línea de descenso + Caminata',
        planCards: [
          //start of card
          {
            cardId: 1,
            cardFigurePlan: ['escalada', 'plus', 'rappel', 'plus', 'caminata'],
            cardTableHead: 'Valor por persona',
            planRows: [
              { rowId: 1, concept: '1 persona:', cost: 224000 },
              { rowId: 2, concept: '2 en adelante:', cost: 154000 },
            ], //planRows
          }, //end of card
        ], //planCards
      }, //end of plan

      //start of plan
      {
        planId: 13,
        planTitle:
          '13. Escalada (25m)  1  ruta + Caminata + Espeleismo (cuevas)',
        planCards: [
          {
            cardId: 1,
            cardFigurePlan: [
              'escalada',
              'plus',
              'caminata',
              'plus',
              'espeleismo',
            ],
            cardTableHead: 'Valor por persona',
            planRows: [
              { rowId: 1, concept: '1 persona:', cost: 250000 },
              { rowId: 2, concept: '2 en adelante:', cost: 160000 },
            ], //end of planRows
          }, //end of card
        ], //end of planCards
      }, //end of plan

      {
        planId: 14,
        planTitle:
          '14.Escalada (25m) 1 ruta + Rappel (25m) 1 línea de descenso + Caminata + Espeleismo (cuevas)',
        planCards: [
          //start of card
          {
            cardId: 1,
            cardFigurePlan: [
              'escalada',
              'plus',
              'rappel',
              'plus',
              'caminata',
              'plus',
              'espeleismo',
            ],
            cardTableHead: 'Valor por persona',
            planRows: [
              { rowId: 1, concept: '1 persona:', cost: 290000 },
              { rowId: 2, concept: '2 en adelante:', cost: 205000 },
            ], //planRows
          }, //end of card
        ], //planCards
      }, //end of plan

      //start of plan
      {
        planId: 15,
        planTitle: '15. Escalada Día completo (8h)',
        planCards: [
          {
            cardId: 1,
            cardFigurePlan: ['escalada'],
            cardTableHead: 'Valor por persona',
            planRows: [
              { rowId: 1, concept: '1 persona:', cost: 375000 },
              { rowId: 2, concept: '2 en adelante:', cost: 215000 },
            ], //end of planRows
          }, //end of card
        ], //end of planCards
      }, //end of plan
    ], //end of plans per page
  }, //end of page
]; //end of pages
