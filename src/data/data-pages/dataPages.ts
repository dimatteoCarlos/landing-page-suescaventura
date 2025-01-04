//dataPages.ts

import { PageType } from '../../types/types';

export const activities: string[] = [
  'planes',
  'caminata',
  'cabalgata',
  'escalada',
  'rappel',
  'ferrata',
  'espeleismo',
];

export const pages: PageType[] = [
  {
    pageAddress: 'portada',

    page: 1,
    visualBox: 1,
    idImg: 1,
    photoGroup: [{ idImg: 2 }, { idImg: 3 }, { idImg: 4 }, { idImg: 5 }],

    texts: {
      title: 'Suescaventura RNT:64563',
      parr: 'somos operadores turísticos en el municipio de Suesca (Cundinamarca) desde el 2015, legalmente constituidos; nos especializamos en actividades al aire libre, turismo de naturaleza y turismo de aventura con todos los requerimiento de seguridad necesarios para brindar un excelente servicio y así generar una experiencia inolvidable en nuestros visitantes.',
      parr1: '',
      parr2: [],
    },
  },

  {
    pageAddress: 'suesca',
    page: 2,
    visualBox: 1,
    idImg: 6,
    photoGroup: [],
    texts: {
      title: 'SUESCA',
      parr: 'Municipio ubicado a 60 kilómetros al norte de Bogotá, su altitud media es de 2585 msnm, primer lugar del país donde se   empezó a practicar el deporte de escalada en roca. Cuenta con unos farallones de roca arenisca ideales para practicar este como uno de los lugares más importantes para la práctica de actividades de aventura cerca de Bogotá',
      parr1: '',
      parr2: [
        'Con los planes organizados por Suescaventura los participantes tendrán la opción de practicar:',
        'Caminatas',
        'Cabalgatas',
        'Escalada en roca',
        'Rappel',
        'Ascenso en vía ferrata',
        'Travesía en cuevas (Espeleismo)',
      ],
    },
  },

  {
    pageAddress: 'caminata',
    page: 3,
    visualBox: 2,
    idImg: 30,
    photoGroup: [],
    texts: {
      title: 'CAMINATA',
      parr: '',
      parr1:
        'Se llevará a cabo en los alrededores del parque rocas de Suesca en entornos Naturales increíbles, rodeados de la fauna y flora nativas de la zona, donde los  participantes aprenderán de historia y biodiversidad.',
      parr2: [],
    },
  },

  {
    pageAddress: 'cabalgata',
    page: 4,
    visualBox: 2,
    idImg: 8,
    photoGroup: [],
    texts: {
      title: 'CABALGATA',
      parr: '',
      parr1:
        'Recorridos en la naturaleza con paisajes increíbles, se realizan en los alrededores de las rocas de Suesca y diferentes miradores acompañados por guías locales',
      parr2: [],
    },
  },
  {
    pageAddress: 'escalada',
    page: 5,
    visualBox: 1,
    idImg: 9,
    photoGroup: [{ idImg: 12 }, { idImg: 10 }, { idImg: 11 }, { idImg: 13 }],
    texts: {
      title: 'Escalada en roca',
      parr: '',
      parr1:
        'Consiste en ascender grandes paredes de roca, cada participante tendrá que valerse de su fuerza física y mental para llegar a la cima',
      parr2: [],
    },
  },

  {
    pageAddress: 'rappel',
    page: 6,
    visualBox: 2,
    idImg: 14,
    photoGroup: [{ idImg: 16 }, { idImg: 15 }, { idImg: 17 }],

    texts: {
      title: 'RAPPEL',
      parr: '',
      parr1:
        'Descensos por cuerdas fijas, donde los participantes se verán enfrentados al vacío de las alturas.',
      parr2: [],
    },
  },
  {
    pageAddress: 'ferrata',
    page: 7,
    visualBox: 1,
    idImg: 18,
    photoGroup: [{ idImg: 21 }, { idImg: 19 }, { idImg: 20 }],
    texts: {
      title: 'Vía ferrata',
      parr: '',
      parr1:
        'Una vía ferrata es un recorrido de montaña que sigue un itinerario de progresión vertical u horizontal y que está equipado con diferentes elementos como cuerdas y guayas que marcan el camino y nos permiten llegar a la cima de forma segura.',
      parr2: [
        'Es una actividad que involucra a todo el equipo, consiste en ascender una pared de roca de más de 100 metros de altura, siguiendo el objetivo de llegar a la cumbre',
      ],
    },
  },
  {
    pageAddress: 'espeleismo',
    page: 8,
    visualBox: 2,
    idImg: 22,
    photoGroup: [{ idImg: 23 }, { idImg: 25 }, { idImg: 24 }],
    texts: {
      title: 'Travesía en cuevas (Espeleismo)',
      parr: '',
      parr1:
        'La actividad inicia caminando por senderos naturales para llegar a la cueva Chocoansia, donde realizaremos un recorrido de aproximadamente 350 metros, sorteando diferentes obstáculos naturales como pasos estrechos y pozos de agua,rodeados por ecosistemas propios de este tipo de escenarios, al finalizar el recorrido retornaremos al punto de partida caminando.',
      parr2: [
        'Nota: Contar con muda de ropa completa por si nos ensuciamos o nos mojamos',
      ],
    },
  },
];

export const lastPage: PageType = {
  pageAddress: 'contact',
  page: 13,
  visualBox: 1,
  idImg: 27,
  photoGroup: [{ idImg: 29 }],
  texts: {
    title: '',
    parr: 'Cordialmente:',
    parr1: '',
    parr2: [
      'No incluye parqueadero',
      'No incluye comidas y bebidas',
      'No incluye servicios no especificados',
    ],

    parr3: [
      'ARLEY PARRA GÓMEZ',
      'GERENTE GENERAL AGENCIA SUESCAVENTURA',
      'GUIA DE ESCALADA EN ROCA',
      'arleyparragomez@gmail.com',
      'tel:3203837807',
    ],
  },
};

export const images = {
  1: { imgUrl: '/images/image-000.png' },
  // 1: { imgUrl: '/images/Rocas_de_Suesca_2.png' },
  2: { imgUrl: '/images/image-001.png' },
  3: { imgUrl: '/images/image-003.png' },
  4: { imgUrl: '/images/image-005.png' },
  5: { imgUrl: '/images/image-007.png' },

  6: { imgUrl: '/images/image-011.jpg' },
  7: { imgUrl: '/images/image-012.jpg' },
  8: { imgUrl: '/images/image-013.jpg' },
  9: { imgUrl: '/images/image-014.png' },
  10: { imgUrl: '/images/image-015.png' },
  11: { imgUrl: '/images/image-017.jpg' },
  12: { imgUrl: '/images/image-018.jpg' },
  13: { imgUrl: '/images/image-019.jpg' },
  14: { imgUrl: '/images/image-020.jpg' },
  15: { imgUrl: '/images/image-021.jpg' },
  16: { imgUrl: '/images/image-022.jpg' },
  17: { imgUrl: '/images/image-023.jpg' },
  18: { imgUrl: '/images/image-024.png' },
  19: { imgUrl: '/images/image-025.png' },
  20: { imgUrl: '/images/image-027.png' },
  21: { imgUrl: '/images/image-029.png' },
  22: { imgUrl: '/images/image-031.png' },
  23: { imgUrl: '/images/image-032.png' },
  24: { imgUrl: '/images/image-034.png' },
  25: { imgUrl: '/images/image-036.png' },
  26: { imgUrl: '/images/image-038.png' },
  27: { imgUrl: '/images/image-042.png' },
  28: { imgUrl: '/images/image-046.jpg' },
  29: { imgUrl: '/images/image-047.png' },
  30: { imgUrl: '/images/image_page03.jpg' },
};
