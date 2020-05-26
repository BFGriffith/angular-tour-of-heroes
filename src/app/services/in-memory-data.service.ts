//ng generate service services/InMemoryData
export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'PPMD' },
      { id: 12, name: 'Principal Partner' },
      { id: 13, name: 'Consulting Managing Director' },
      { id: 14, name: 'Senior Solution Manager' },
      { id: 15, name: 'Solution Manager' },
      { id: 16, name: 'Solution Architect' },
      { id: 17, name: 'Senior Solution Specialist' },
      { id: 18, name: 'Solution Specialist' },
      { id: 19, name: 'Solution Engineer' },
      { id: 20, name: 'Solution Analist' }
    ];
    return { heroes };
  }
}
