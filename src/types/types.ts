export type PageType = {
  page: number;
  idImg: number;
  photoGroup?: {
    idImg: number;
  }[];

  texts: {
    title: string;
    parr: string;
    parr1: string;
    parr2: string[];
  };
};

export type DataImageType = {
  [key: string]: { imgUrl: string };
};

//---------------------

export type PlansType = {
  pageId: number;
  pageTitle?: string | null;
  parr?: string | null;
  parr1?: string | null;
  pageBgImage: string;
  plans: // |
  {
    planId: number;
    planTitle: string;
    planCards: {
      cardId: number;
      cardFigurePlan: string[];
      //  | null
      cardTableHead: string;
      planRows: {
        rowId: number;
        concept: string;
        cost: number;
      }[];
      // | null
    }[];
    // | null
  }[];
  // | null;
};

export type PlansEntity = {
  planId: number;
  planTitle: string;
  planCards?: PlanCardsType[] 
  // | null
  ;
};
export type PlanCardsType = {
  cardId: number;
  cardFigurePlan?: string[] | null;
  cardTableHead: string;
  planRows?: PlanRowsEntity[] | null;
};
export type PlanRowsEntity = {
  rowId: number;
  concept: string;
  cost: number;
};
