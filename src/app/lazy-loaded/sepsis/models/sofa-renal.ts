import {SofaItemModel} from './sofa-item.model';

export const SofaRenal: SofaItemModel[] = [
  { description: 'Креатинин, мкмоль/л < 110', score: 0 },
  { description: 'Креатинин, мкмоль/л 110-170', score: 1 },
  { description: 'Креатинин, мкмоль/л 171-299', score: 2 },
  { description: 'Креатинин, мкмоль/л 300-440 или диурез < 500 мл/сут', score: 3 },
  { description: 'Креатинин, мкмоль/л > 440 или диурез < 200 мл/сут', score: 4 }
];
