import { DataSource } from 'typeorm';
import { Element } from './element.entity';

export const elementProviders = [
  {
    provide: 'ELEMENT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Element),
    inject: ['DATA_SOURCE'],
  },
];