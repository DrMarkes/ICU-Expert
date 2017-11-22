import {SofaItemModel} from './sofa-item.model';

export const SofaLiver: SofaItemModel[] = [
  { description: 'Билирубин, мкмоль/л < 20', score: 0 },
  { description: 'Билирубин, мкмоль/л 20 - 32', score: 1 },
  { description: 'Билирубин, мкмоль/л < 33- 101', score: 2 },
  { description: 'Билирубин, мкмоль/л < 102 - 204', score: 3 },
  { description: 'Билирубин, мкмоль/л > 204', score: 4 }
];
