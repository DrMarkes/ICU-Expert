import {SofaItemModel} from './sofa-item.model';

export const SofaBreath: SofaItemModel[] = [
  { description: 'PaO2/FiO2, мм рт.ст. ≥ 400', score: 0 },
  { description: 'PaO2/FiO2, мм рт.ст. < 400', score: 1 },
  { description: 'PaO2/FiO2, мм рт.ст. < 300', score: 2 },
  { description: 'PaO2/FiO2, мм рт.ст. < 200 и респираторная поддержка', score: 3 },
  { description: 'PaO2/FiO2, мм рт.ст. < 100 и респираторная поддержка', score: 4 }
];
