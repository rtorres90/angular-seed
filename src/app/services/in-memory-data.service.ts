import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let things = [
      {id: 11, name: 'Wea'},
      {id: 12, name: 'Weaita'},
      {id: 13, name: 'Vaina'},
      {id: 14, name: 'Coso'},
      {id: 15, name: 'Thing'}
    ];
    return {things};
  }
}
