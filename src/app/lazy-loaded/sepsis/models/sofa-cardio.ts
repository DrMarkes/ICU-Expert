import {SofaItemModel} from './sofa-item.model';

export const SofaCardio: SofaItemModel[] = [
  { description: 'Среднее АД >= 70 мм рт. ст.', score: 0 },
  { description: 'Среднее АД < 70 мм рт. ст.', score: 1 },
  { description: 'Допамин <= 5 или добутамин в любой дозе', score: 2 },
  { description: 'Допамин 5–15 или адреналин/норадреналин ≤ 0,1', score: 3 },
  { description: 'Допамин > 15 или адреналин/норадреналин > 0,1', score: 4 }
];
