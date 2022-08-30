export interface IDummyExpenses {
  id?: string,
  description: string,
  amount: number,
  date: Date
}

export const DUMMY_EXPENSES: IDummyExpenses[] = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2022-08-29')
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2022-01-05')
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.59,
    date: new Date('2022-08-30')
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.89,
    date: new Date('2022-08-25')
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 18.79,
    date: new Date('2022-02-18')
  }
]
