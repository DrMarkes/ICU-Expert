import {SofaItemModel} from './sofa-item.model';

export const SofaCoagulation: SofaItemModel[] = [
  { description: 'Тромбоциты, х109/л ≥ 150', score: 0 },
  { description: 'Тромбоциты, х109/л < 150', score: 1 },
  { description: 'Тромбоциты, х109/л < 100', score: 2 },
  { description: 'Тромбоциты, х109/л < 50', score: 3 },
  { description: 'Тромбоциты, х109/л < 20', score: 4 }
];
